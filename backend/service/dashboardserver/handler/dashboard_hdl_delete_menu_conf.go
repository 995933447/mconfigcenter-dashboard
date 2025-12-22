package handler

import (
	"context"

	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/rbac/rbac"
)

func (s *Dashboard) DeleteMenuConf(ctx context.Context, req *dashboard.DeleteMenuConfReq) (*dashboard.DeleteMenuConfResp, error) {
	var resp dashboard.DeleteMenuConfResp

	_, err := rbac.RBACGRPC().RemovePerm(ctx, &rbac.RemovePermReq{
		PermId:             req.PermId,
		AutoUnbindRoles:    true,
		AutoRemoveChildren: true,
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
