package handler

import (
	"github.com/995933447/mconfigcenter-dashboard/backend/api/gateway"
)

type Gateway struct {
	gateway.UnimplementedGatewayServer
	ServiceName string
}

var GatewayHandler = &Gateway{
	ServiceName: gateway.EasymicroGRPCPbServiceNameGateway,
}