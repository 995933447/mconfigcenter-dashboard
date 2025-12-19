package boot

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"

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
	"github.com/995933447/mconfigcenter-dashboard/backend/common/reqsess"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/gatewayserver/config"
	"github.com/jhump/protoreflect/desc"
	"github.com/valyala/fasthttp"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/proto"
)

var errHttpRequestOptions = errors.New("http request options error")

func InitApp() {
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
			if token == nil {
				if !httpOpt.NoAuth {
					return nil, nil, nil, easymicrogrpc.NewRPCErr(commonerr.ErrCode_ErrCodeNoAuth)
				}
			} else {
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

				headers[reqsess.CtxKeyUserId] = []string{
					fmt.Sprintf("%d", authResp.UserId),
				}
			}

			return params, headers, opts, nil
		}, func(res *grpcgateway.ResponseHttp) {
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
				return
			}

			grpcgateway.RespHttp(res)
		})
		if err != nil {
			log.Fatal(err)
		}
	}()
}
