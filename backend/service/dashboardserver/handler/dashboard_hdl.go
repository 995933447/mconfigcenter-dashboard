package handler

import (
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
)

type Dashboard struct {
	dashboard.UnimplementedDashboardServer
	ServiceName string
}

var DashboardHandler = &Dashboard{
	ServiceName: dashboard.EasymicroGRPCPbServiceNameDashboard,
}
