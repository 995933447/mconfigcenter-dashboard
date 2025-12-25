package handler

import (
	"context"
	"fmt"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/elemutil"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/rbac/rbac"
	"github.com/995933447/runtimeutil"
	"go.mongodb.org/mongo-driver/bson"
)

func (s *Dashboard) ListUser(ctx context.Context, req *dashboard.ListUserReq) (*dashboard.ListUserResp, error) {
	var resp dashboard.ListUserResp

	filter := bson.M{}
	if req.Name != "" {
		filter["username"] = bson.M{
			"$regex":   req.Name,
			"$options": "im",
		}
	}

	if req.UserId != 0 {
		filter["user_id"] = req.UserId
	}

	if req.Status != 0 {
		filter["status"] = req.Status
	}

	if req.RoleId > 0 {
		filter["role_ids"] = req.RoleId
	}

	if req.Page == nil {
		req.Page = &dashboard.Page{}
	}

	mod := dashboard.NewUserModel()

	users, err := mod.FindManyByPage(ctx, filter, bson.D{{"_id", -1}}, int64(req.Page.Page), int64(req.Page.PageSize))
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	eg := runtimeutil.NewErrGrp()

	eg.Go(func() error {
		userIds, err := elemutil.PluckUint64(resp.List, "UserId")
		if err != nil {
			fastlog.Error(err)
			return grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}

		listUserRoleResp, err := rbac.RBACGRPC().ListUserRole(ctx, &rbac.ListUserRoleReq{
			UserIds: userIds,
			Scope:   rbacx.Scope,
		})
		if err != nil {
			fastlog.Error(err)
			return grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}

		listRoleResp, err := rbac.RBACGRPC().ListRole(ctx, &rbac.ListRoleReq{
			Scope: rbacx.Scope,
		})
		if err != nil {
			fastlog.Error(err)
			return grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}

		roleMapAny, err := elemutil.KeyBy(listRoleResp.List, "RoleId")
		if err != nil {
			fastlog.Error(err)
			return grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}

		roleMap, ok := roleMapAny.(map[uint64]*rbac.Role)
		if !ok {
			fastlog.Error(fmt.Errorf("get roleMap failed"))
			return grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
		}

		mapUserIdToRoles := make(map[uint64][]*rbac.Role)
		for _, userRole := range listUserRoleResp.List {
			roles, _ := mapUserIdToRoles[userRole.UserRole.UserId]
			role, ok := roleMap[userRole.UserRole.RoleId]
			if !ok {
				continue
			}
			mapUserIdToRoles[userRole.UserRole.UserId] = append(roles, &rbac.Role{
				RoleId:       role.RoleId,
				Name:         role.Name,
				Remark:       role.Remark,
				Status:       role.Status,
				Scope:        role.Scope,
				IsSuperAdmin: role.IsSuperAdmin,
				PermIds:      role.PermIds,
			})
		}

		for _, user := range users {
			var roles []*dashboard.Role
			roleInfos, ok := mapUserIdToRoles[user.UserId]
			if ok {
				for _, roleInfo := range roleInfos {
					roles = append(roles, &dashboard.Role{
						RoleId:       roleInfo.RoleId,
						Name:         roleInfo.Name,
						Remark:       roleInfo.Remark,
						Status:       roleInfo.Status,
						PermIds:      roleInfo.PermIds,
						IsSuperAdmin: roleInfo.IsSuperAdmin,
					})
				}
			}

			resp.List = append(resp.List, &dashboard.ListUserResp_Item{
				User: &dashboard.User{
					UserId:      user.UserId,
					Username:    user.Username,
					Status:      user.Status,
					LastLoginAt: user.LastLoginAt,
				},
				Roles: roles,
			})
		}

		return nil
	})

	eg.Go(func() error {
		total, err := mod.FindCount(ctx, filter)
		if err != nil {
			fastlog.Error(err)
			return err
		}

		resp.Total = uint32(total)
		return nil
	})

	if err := eg.Wait(); err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
