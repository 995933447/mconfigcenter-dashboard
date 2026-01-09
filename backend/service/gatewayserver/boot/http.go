package boot

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/995933447/discovery/manager"
	easymicrogrpc "github.com/995933447/easymicro/grpc"
	"github.com/995933447/easymicro/grpc/interceptor"
	easymicrogrpcgateway "github.com/995933447/easymicro/grpcgateway"
	"github.com/995933447/fastlog"
	"github.com/995933447/gonetutil"
	"github.com/995933447/grpcgateway"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/httpext"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/reqsess"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/gatewayserver/config"
	"github.com/995933447/rbac/rbac"
	"github.com/995933447/runtimeutil"
	"github.com/jhump/protoreflect/desc"
	jsoniter "github.com/json-iterator/go"
	"github.com/valyala/fasthttp"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
)

var errHttpRequestOptions = errors.New("http request options error")

func ServerHttp() {
	var (
		host      string
		port      int
		timeoutMs int64
	)
	config.SafeReadServerConfig(func(c *config.ServerConfig) {
		var err error
		host, err = gonetutil.EvalVarToParseIp(c.HttpHostVar)
		if err != nil {
			log.Fatalln(err)
		}

		port = c.HttpPort

		timeoutMs = c.GetRPCTimeoutMs()
	})

	err := grpcgateway.Init(&grpcgateway.Conf{
		ServiceName: "gateway.Gateway",
		GrpcConf: grpcgateway.GrpcConf{
			GrpcResolveSchema: easymicrogrpc.DefaultGRPCResolveScheme,
			GrpcClientOptions: []grpc.DialOption{
				grpc.WithTransportCredentials(insecure.NewCredentials()),
				grpc.WithDefaultServiceConfig(fmt.Sprintf(`{"loadBalancingPolicy": "%s"}`, easymicrogrpc.BalancerNameRoundRobin)),
				grpc.WithChainUnaryInterceptor(
					interceptor.TraceRPCUnaryInterceptor,
					interceptor.RPCBreakerUnaryInterceptor,
					interceptor.FastlogRPCUnaryInterceptor,
					interceptor.NatsRPCFallbackInterceptor,
				),
				grpc.WithChainStreamInterceptor(
					interceptor.TraceRPCStreamInterceptor,
					interceptor.RPCBreakerStreamInterceptor,
					interceptor.FastlogRPCStreamInterceptor,
				),
			},
			CallClientTimeoutMs:                timeoutMs,
			InitGrpcResolverFunc:               easymicrogrpcgateway.InitGRPCResolverFunc(context.TODO(), easymicrogrpc.DefaultGRPCResolveScheme, manager.DefaultDiscoveryName),
			InitAndWatchGrpcClientMetadataFunc: easymicrogrpcgateway.InitAndWatchGRPCClientMetadataFunc(manager.DefaultDiscoveryName),
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("http host: %s, port: %d\n", host, port)

	go func() {
		err := grpcgateway.HandleHttp(host, port, grpcgateway.ResolveRpcRouteFromHttp, func(ctx *fasthttp.RequestCtx, method *desc.MethodDescriptor) (interface{}, map[string][]string, []grpc.CallOption, error) {
			runtimeutil.StoreTrace(runtimeutil.CreateTrace())

			fastlog.Infof("recevied http request:%s %s, query:%s body:%s", ctx.Method(), ctx.Path(), ctx.QueryArgs().String(), string(ctx.Request.Body()))

			if !proto.HasExtension(method.GetMethodOptions(), httpext.E_HttpRule) {
				return nil, nil, nil, grpcgateway.ErrNotSupportHttpAccess
			}

			opt := proto.GetExtension(method.GetMethodOptions(), httpext.E_HttpRule)
			httpOpt, ok := opt.(*httpext.HttpRule)
			if !ok {
				return nil, nil, nil, grpcgateway.ErrNotSupportHttpAccess
			}

			reqMethod := string(ctx.Method())
			if httpOpt.Method != reqMethod {
				if reqMethod == http.MethodOptions {
					return nil, nil, nil, errHttpRequestOptions
				}
				return nil, nil, nil, grpcgateway.ErrNotSupportMethod
			}

			params, headers, opts, err := grpcgateway.ResolveRpcParamsFromHttp(ctx, method)
			if err != nil {
				return nil, nil, nil, err
			}

			token := ctx.Request.Header.Peek("Token")
			if !httpOpt.NoAuth {
				if token == nil {
					return nil, nil, nil, easymicrogrpc.NewRPCErr(commonerr.ErrCode_ErrCodeNoAuth)
				}

				authResp, err := dashboard.DashboardGRPC().AuthUser(ctx, &dashboard.AuthUserReq{
					Token: string(token),
				})
				if err != nil {
					if !easymicrogrpc.IsRPCErr(err, commonerr.ErrCode_ErrCodeNoAuth.Number()) {
						fastlog.Errorf("dashboard.DashboardGRPC().AuthUser err: %v", err)
						return nil, nil, nil, easymicrogrpc.NewRPCErr(commonerr.ErrCode_ErrCodeNoAuth)
					}

					return nil, nil, nil, err
				}

				if !httpOpt.SkipPermCheck {
					checkPermResp, err := rbac.RBACGRPC().CheckPerm(ctx, &rbac.CheckPermReq{
						UserId:          authResp.UserId,
						Scope:           rbacx.Scope,
						ResourceService: string(ctx.Path()),
					})
					if err != nil {
						fastlog.Errorf("rbac.RBACGRPC().CheckPerm err: %v", err)
						return nil, nil, nil, err
					}

					if checkPermResp.Rejected {
						return nil, nil, nil, easymicrogrpc.NewRPCErr(commonerr.ErrCode_ErrCodeForbidden)
					}
				}

				headers[reqsess.CtxKeyUserId] = []string{
					fmt.Sprintf("%d", authResp.UserId),
				}
			}

			return params, headers, opts, nil
		}, func(res *grpcgateway.ResponseHttp) {
			defer runtimeutil.AutoRemoveTrace()

			origin := string(res.Ctx.Request.Header.Peek("Origin"))
			if origin != "" {
				res.Ctx.Response.Header.Set("Access-Control-Allow-Origin", origin)
				res.Ctx.Response.Header.Set("Access-Control-Allow-Credentials", "true")
			}

			res.Ctx.Response.Header.Set(
				"Access-Control-Allow-Methods",
				"GET, POST, PUT, DELETE, OPTIONS",
			)

			res.Ctx.Response.Header.Set(
				"Access-Control-Allow-Headers",
				"Content-Type, Token",
			)

			if errors.Is(res.Err, errHttpRequestOptions) {
				res.Ctx.SetStatusCode(fasthttp.StatusNoContent) // 204
				fastlog.Infof("resp http: status code:%d, header:%s", fasthttp.StatusNoContent, res.Ctx.Response.Header.String())
				return
			}

			gatewayResp := &GatewayResp{}

			if traces := res.RespMetadata[easymicrogrpc.CtxKeyTrace]; len(traces) > 0 {
				gatewayResp.Trace = traces[0]
			} else {
				gatewayResp.Trace = runtimeutil.GetTrace()
			}

			if res.Err != nil {
				if state, ok := status.FromError(res.Err); ok {
					gatewayResp.ErrCode = int32(state.Code())
					gatewayResp.ErrMsg = state.Message()
				} else {
					gatewayResp.ErrCode = -1
					gatewayResp.ErrMsg = res.Err.Error()
				}
			}

			if res.GrpcResp != nil {
				marshaler := protojson.MarshalOptions{UseProtoNames: true}
				b, err := marshaler.Marshal(res.GrpcResp)
				if err != nil {
					fastlog.Errorf("err: %+v", err)
					gatewayResp.ErrCode = -1
					gatewayResp.ErrMsg = res.Err.Error()
					return
				}

				m := make(map[string]interface{})
				if err = jsoniter.Unmarshal(b, &m); err != nil {
					fastlog.Errorf("err: %+v", err)
					gatewayResp.ErrCode = -1
					gatewayResp.ErrMsg = res.Err.Error()
					return
				}

				gatewayResp.Data = m
			}

			j, err := jsoniter.MarshalToString(gatewayResp)
			if err != nil {
				fastlog.Errorf("err:%v", err)
				return
			}

			if res.RespMetadata != nil {
				for k, v := range res.RespMetadata {
					res.Ctx.Response.Header.Set(k, strings.Join(v, ","))
				}
			}
			res.Ctx.Response.Header.SetContentType("application/json")

			fastlog.Infof("resp http: status code:%d, data:%s, header:%s", fasthttp.StatusOK, j, res.Ctx.Response.Header.String())

			if _, err = fmt.Fprintf(res.Ctx, j); err != nil {
				fastlog.Errorf("err:%v", err)
				return
			}
		})
		if err != nil {
			log.Fatal(err)
		}
	}()
}

type GatewayResp struct {
	ErrCode int32       `json:"err_code"`
	ErrMsg  string      `json:"err_msg"`
	Data    interface{} `json:"data"`
	Trace   string      `json:"trace"`
}
