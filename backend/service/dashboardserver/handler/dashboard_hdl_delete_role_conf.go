package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/rbac/rbac"
)

func (s *Dashboard) DeleteRoleConf(ctx context.Context, req *dashboard.DeleteRoleConfReq) (*dashboard.DeleteRoleConfResp, error) {
	var resp dashboard.DeleteRoleConfResp

	if req.RoleId == 0 {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "role_id is required")
	}

	_, err := rbac.RBACGRPC().RemoveRole(ctx, &rbac.RemoveRoleReq{
		RoleId: req.RoleId,
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
