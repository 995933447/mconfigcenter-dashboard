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

func (s *Dashboard) ListRoleConf(ctx context.Context, req *dashboard.ListRoleConfReq) (*dashboard.ListRoleConfResp, error) {
	var resp dashboard.ListRoleConfResp

	listRoleReq := &rbac.ListRoleReq{
		Scope: rbacx.Scope,
	}

	if req.Name != "" {
		listRoleReq.Name = req.Name
	}

	if req.Status != 0 {
		listRoleReq.Status = req.Status
	}

	if req.OnlySuperAdmin {
		listRoleReq.OnlySuperAdmin = true
	}

	if req.WithoutSuperAdmin {
		listRoleReq.WithoutSuperAdmin = true
	}

	listRoleResp, err := rbac.RBACGRPC().ListRole(ctx, listRoleReq)
	if err != nil {
		fastlog.Errorf("list role conf failed, err:%v", err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	for _, item := range listRoleResp.List {
		resp.List = append(resp.List, &dashboard.ListRoleConfResp_Role{
			RoleId:       item.RoleId,
			Name:         item.Name,
			Status:       item.Status,
			IsSuperAdmin: item.IsSuperAdmin,
			PermIds:      item.PermIds,
			Remark:       item.Remark,
		})
	}

	resp.Total = listRoleResp.Total

	return &resp, nil
}
