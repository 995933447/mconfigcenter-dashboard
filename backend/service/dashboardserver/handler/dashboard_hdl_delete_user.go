package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/rbac/rbac"
)

func (s *Dashboard) DeleteUser(ctx context.Context, req *dashboard.DeleteUserReq) (*dashboard.DeleteUserResp, error) {
	var resp dashboard.DeleteUserResp

	_, err := dashboard.NewUserModel().DeleteOneByUserId(ctx, req.UserId)
	if err != nil {
		fastlog.Error(err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	_, err = rbac.RBACGRPC().OverwriteUserRoles(ctx, &rbac.OverwriteUserRolesReq{
		UserId: req.UserId,
	})
	if err != nil {
		fastlog.Error(err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	return &resp, nil
}
