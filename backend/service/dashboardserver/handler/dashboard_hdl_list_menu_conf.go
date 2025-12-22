package handler

import (
	"context"

	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/rbac/rbac"
)

func (s *Dashboard) ListMenuConf(ctx context.Context, req *dashboard.ListMenuConfReq) (*dashboard.ListMenuConfResp, error) {
	var resp dashboard.ListMenuConfResp

	listPermResp, err := rbac.RBACGRPC().ListPerm(ctx, &rbac.ListPermReq{
		Scope: rbacx.Scope,
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	for _, item := range listPermResp.List {
		var services []string
		for _, svc := range item.ResourceServices {
			services = append(services, svc.Service)
		}
		resp.List = append(resp.List, &dashboard.ListMenuConfResp_MenuConf{
			Name:     item.Name,
			Pid:      item.Pid,
			PermId:   item.PermId,
			Path:     item.ResourceRoute,
			Services: services,
			PathType: item.ResourceType,
		})
	}

	resp.Total = listPermResp.Total

	return &resp, nil
}
