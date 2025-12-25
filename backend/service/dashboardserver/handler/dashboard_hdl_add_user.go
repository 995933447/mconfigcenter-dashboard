package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/elemutil"
	"github.com/995933447/fastlog"
	"github.com/995933447/idgen/idgen"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/util"
	"github.com/995933447/rbac/rbac"
)

func (s *Dashboard) AddUser(ctx context.Context, req *dashboard.AddUserReq) (*dashboard.AddUserResp, error) {
	var resp dashboard.AddUserResp

	if req.Name == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "name is required")
	}

	if req.Password == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "password is required")
	}

	if req.Status == 0 {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "status is required")
	}

	password, err := util.DecryptUserPassword(req.Password)
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	password, err = util.HashUserPassword(password)
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	allocIdResp, err := idgen.IdGenGRPC().AllocId(ctx, &idgen.AllocIdReq{
		TbName: util.GenIdGenTbName(dashboard.UserDbName, dashboard.UserTbName),
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
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

	err = dashboard.NewUserModel().InsertOne(ctx, &dashboard.UserOrm{
		UserId:   allocIdResp.Id,
		Username: req.Name,
		Password: password,
		Status:   req.Status,
		RoleIds:  roleIds,
	})
	if err != nil {
		fastlog.Error(err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	if len(roleIds) > 0 {
		var rbacRoles []*rbac.OverwriteUserRolesReq_UserRoleInfo
		for _, roleId := range roleIds {
			rbacRoles = append(rbacRoles, &rbac.OverwriteUserRolesReq_UserRoleInfo{
				RoleId: roleId,
				Scope:  rbacx.Scope,
				Status: int32(rbac.UserRoleStatus_UserRoleStatusNormal),
			})
		}

		_, err = rbac.RBACGRPC().OverwriteUserRoles(ctx, &rbac.OverwriteUserRolesReq{
			UserId:    allocIdResp.Id,
			UserRoles: rbacRoles,
		})
		if err != nil {
			fastlog.Error(err)
			return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}
	}

	return &resp, nil
}
