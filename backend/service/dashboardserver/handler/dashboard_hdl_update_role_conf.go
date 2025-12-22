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

func (s *Dashboard) UpdateRoleConf(ctx context.Context, req *dashboard.UpdateRoleConfReq) (*dashboard.UpdateRoleConfResp, error) {
	var resp dashboard.UpdateRoleConfResp

	if req.RoleId == 0 {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "role_id is required")
	}

	if req.Name == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "name is required")
	}

	if req.Status == 0 {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "status is required")
	}

	_, err := rbac.RBACGRPC().SetRole(ctx, &rbac.SetRoleReq{
		Role: &rbac.Role{
			RoleId:       req.RoleId,
			Name:         req.Name,
			Status:       req.Status,
			PermIds:      req.PermIds,
			IsSuperAdmin: req.IsSuperAdmin,
			Scope:        rbacx.Scope,
		},
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
