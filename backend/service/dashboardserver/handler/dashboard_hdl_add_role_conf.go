package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/rbac/rbac"
)

func (s *Dashboard) AddRoleConf(ctx context.Context, req *dashboard.AddRoleConfReq) (*dashboard.AddRoleConfResp, error) {
	var resp dashboard.AddRoleConfResp

	if req.Name == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "name is required")
	}

	if req.Status == 0 {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "status is required")
	}

	_, err := rbac.RBACGRPC().SetRole(ctx, &rbac.SetRoleReq{
		Role: &rbac.Role{
			Name:         req.Name,
			Scope:        rbacx.Scope,
			IsSuperAdmin: req.IsSuperAdmin,
			Status:       req.Status,
			PermIds:      req.PermIds,
		},
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
