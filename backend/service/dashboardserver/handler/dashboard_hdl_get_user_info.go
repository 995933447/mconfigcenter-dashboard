package handler

import (
	"context"
	"errors"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/reqsess"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/config"
	"github.com/995933447/rbac/rbac"
	"go.mongodb.org/mongo-driver/mongo"
)

func (s *Dashboard) GetUserInfo(ctx context.Context, req *dashboard.GetUserInfoReq) (*dashboard.GetUserInfoResp, error) {
	var resp dashboard.GetUserInfoResp

	userId, err := reqsess.GetUserIdFromGRPCCtxOrErrUserNotFound(ctx)
	if err != nil {
		return nil, err
	}

	user, err := dashboard.NewUserModel().FindOneByUserId(ctx, userId)
	if err != nil {
		fastlog.Warn(err)

		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodeUserNotFound)
		}

		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	resp.UserId = user.UserId
	resp.Username = user.Username
	resp.LastLoginAt = user.LastLoginAt

	var disabledRBAC bool
	config.SafeReadServerConfig(func(c *config.ServerConfig) {
		disabledRBAC = c.DisabledRBAC
	})

	if disabledRBAC {
		return &resp, nil
	}

	listUserRoleResp, err := rbac.RBACGRPC().ListUserRole(ctx, &rbac.ListUserRoleReq{
		UserIds: []uint64{user.UserId},
		Scope:   rbacx.Scope,
		Status:  int32(rbac.UserRoleStatus_UserRoleStatusNormal),
		Page:    &rbac.Page{},
	})
	if err != nil {
		fastlog.Error(err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	if len(listUserRoleResp.List) > 0 {
		var roleIds []uint64
		for _, role := range listUserRoleResp.List {
			roleIds = append(roleIds, role.UserRole.RoleId)
		}

		listRoleResp, err := rbac.RBACGRPC().ListRole(ctx, &rbac.ListRoleReq{
			RoleIds: roleIds,
			Scope:   rbacx.Scope,
			Status:  int32(rbac.RoleStatus_RoleStatusNormal),
		})
		if err != nil {
			fastlog.Error(err)
			return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}

		for _, role := range listRoleResp.List {
			resp.RoleNames = append(resp.RoleNames, role.Name)
		}
	}

	return &resp, nil
}
