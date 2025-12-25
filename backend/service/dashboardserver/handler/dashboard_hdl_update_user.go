package handler

import (
	"context"
	"errors"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/elemutil"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/util"
	"github.com/995933447/rbac/rbac"
	"go.mongodb.org/mongo-driver/mongo"
)

func (s *Dashboard) UpdateUser(ctx context.Context, req *dashboard.UpdateUserReq) (*dashboard.UpdateUserResp, error) {
	var resp dashboard.UpdateUserResp

	if req.UserId == 0 {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "user_id is required")
	}

	mod := dashboard.NewUserModel()

	user, err := mod.FindOneByUserId(ctx, req.UserId)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodeUserNotFound)
		}

		fastlog.Error(err)
		return nil, err
	}

	if req.Name != "" {
		user.Username = req.Name
	}

	if req.Password != "" {
		password, err := util.DecryptUserPassword(req.Password)
		if err != nil {
			fastlog.Error(err)
			return nil, err
		}

		user.Password, err = util.HashUserPassword(password)
		if err != nil {
			fastlog.Error(err)
			return nil, err
		}
	}

	if req.Status != 0 {
		user.Status = req.Status
	}

	var roleIds []uint64
	if len(req.RoleIds) > 0 {
		listRoleResp, err := rbac.RBACGRPC().ListRole(ctx, &rbac.ListRoleReq{
			RoleIds: req.RoleIds,
			Scope:   rbacx.Scope,
		})
		if err != nil {
			fastlog.Error(err)
			return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}

		roleIds, err = elemutil.PluckUint64(listRoleResp.List, "RoleId")
		if err != nil {
			fastlog.Error(err)
			return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}
	}

	if len(roleIds) > 0 {
		user.RoleIds = roleIds

		var rbacRoles []*rbac.OverwriteUserRolesReq_UserRoleInfo
		for _, roleId := range roleIds {
			rbacRoles = append(rbacRoles, &rbac.OverwriteUserRolesReq_UserRoleInfo{
				RoleId: roleId,
				Scope:  rbacx.Scope,
				Status: int32(rbac.UserRoleStatus_UserRoleStatusNormal),
			})
		}

		_, err = rbac.RBACGRPC().OverwriteUserRoles(ctx, &rbac.OverwriteUserRolesReq{
			UserId:    user.UserId,
			UserRoles: rbacRoles,
		})
		if err != nil {
			fastlog.Error(err)
			return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}
	}

	if _, err = mod.Update(ctx, user); err != nil {
		fastlog.Error(err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	return &resp, nil
}
