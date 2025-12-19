package handler

import (
	"context"

	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/config"
)

func (s *Dashboard) DisabledRBAC(ctx context.Context, req *dashboard.DisabledRBACReq) (*dashboard.DisabledRBACResp, error) {
	var resp dashboard.DisabledRBACResp

	config.SafeReadServerConfig(func(c *config.ServerConfig) {
		resp.Disabled = c.DisabledRBAC
	})

	return &resp, nil
}
