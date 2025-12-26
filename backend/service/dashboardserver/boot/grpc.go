package boot

import (
	"context"
	"fmt"

	easymicrogrpc "github.com/995933447/easymicro/grpc"
	"github.com/995933447/easymicro/grpc/interceptor"
	"github.com/995933447/idgen/idgen"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/config"
	"github.com/995933447/mconfigcenter/configcenter"
	"github.com/995933447/rbac/rbac"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func RegisterGRPCDialOpts() {
	unaryInterceptors := []grpc.UnaryClientInterceptor{
		interceptor.RecoveryRPCUnaryInterceptor,
		interceptor.TraceRPCUnaryInterceptor,
		interceptor.RPCBreakerUnaryInterceptor,
		interceptor.FastlogRPCUnaryInterceptor,
	}
	config.SafeReadServerConfig(func(c *config.ServerConfig) {
		if !c.IsProd() {
			unaryInterceptors = append(unaryInterceptors, interceptor.NatsRPCFallbackInterceptor)
		}
	})

	easymicrogrpc.RegisterGlobalDialOpts(
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithDefaultServiceConfig(fmt.Sprintf(`{"loadBalancingPolicy": "%s"}`, easymicrogrpc.BalancerNameRoundRobin)),
		grpc.WithChainUnaryInterceptor(unaryInterceptors...),
		grpc.WithChainStreamInterceptor(
			interceptor.TraceRPCStreamInterceptor,
			interceptor.RPCBreakerStreamInterceptor,
			interceptor.FastlogRPCStreamInterceptor,
			interceptor.RecoveryRPCStreamInterceptor,
		),
	)
}

func PrepareDiscoverGRPC() error {
	if err := easymicrogrpc.PrepareDiscoverGRPC(context.TODO(), dashboard.EasymicroGRPCSchema, dashboard.EasymicroDiscoveryName); err != nil {
		return err
	}

	if err := idgen.PrepareGRPC(context.TODO(), dashboard.EasymicroDiscoveryName); err != nil {
		return err
	}

	if err := rbac.PrepareGRPC(context.TODO(), dashboard.EasymicroDiscoveryName); err != nil {
		return err
	}

	if err := configcenter.PrepareGRPC(context.TODO(), dashboard.EasymicroDiscoveryName); err != nil {
		return err
	}

	return nil
}
