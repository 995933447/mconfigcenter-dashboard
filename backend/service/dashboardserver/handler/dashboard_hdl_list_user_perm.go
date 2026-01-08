package handler

import (
	"context"

	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/reqsess"
	"github.com/995933447/rbac/rbac"
)

func (s *Dashboard) ListUserPerm(ctx context.Context, req *dashboard.ListUserPermReq) (*dashboard.ListUserPermResp, error) {
	var resp dashboard.ListUserPermResp

	uid, err := reqsess.GetUserIdFromGRPCCtxOrErrUserNotFound(ctx)
	if err != nil {
		return nil, err
	}

	listUserRoleResp, err := rbac.RBACGRPC().ListUserRole(ctx, &rbac.ListUserRoleReq{
		Scope:   rbacx.Scope,
		UserIds: []uint64{uid},
		Status:  int32(rbac.UserRoleStatus_UserRoleStatusNormal),
	})
	if err != nil {
		fastlog.Errorf("ListUserRole err: %v", err)
		return nil, err
	}

	var roleIds []uint64
	for _, userRole := range listUserRoleResp.List {
		roleIds = append(roleIds, userRole.UserRole.RoleId)
	}

	listRoleResp, err := rbac.RBACGRPC().ListRole(ctx, &rbac.ListRoleReq{
		Scope:   rbacx.Scope,
		RoleIds: roleIds,
		Status:  int32(rbac.RoleStatus_RoleStatusNormal),
	})
	if err != nil {
		fastlog.Errorf("ListRole err: %v", err)
		return nil, err
	}

	var (
		permIds   []uint64
		permIdSet = make(map[uint64]struct{})
	)
	for _, role := range listRoleResp.List {
		if role.IsSuperAdmin {
			resp.IsSuperAdmin = true
			return &resp, nil
		}
		for _, permId := range role.PermIds {
			if _, ok := permIdSet[permId]; ok {
				continue
			}
			permIds = append(permIds, permId)
			permIdSet[permId] = struct{}{}
		}
	}

	listPermResp, err := rbac.RBACGRPC().ListPerm(ctx, &rbac.ListPermReq{
		Scope:   rbacx.Scope,
		PermIds: permIds,
	})
	if err != nil {
		fastlog.Errorf("ListPerm err: %v", err)
		return nil, err
	}

	for _, perm := range listPermResp.List {
		resp.PermIds = append(resp.PermIds, perm.PermId)
	}

	return &resp, nil
}
