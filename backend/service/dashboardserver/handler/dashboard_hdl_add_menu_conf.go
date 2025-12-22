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

func (s *Dashboard) AddMenuConf(ctx context.Context, req *dashboard.AddMenuConfReq) (*dashboard.AddMenuConfResp, error) {
	var resp dashboard.AddMenuConfResp

	if req.Name == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "name is required")
	}

	if req.Path == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "path is required")
	}

	var resourceServices []*rbac.ResourceService
	for _, svc := range req.Services {
		resourceServices = append(resourceServices, &rbac.ResourceService{
			Service: svc,
		})
	}
	_, err := rbac.RBACGRPC().SetPerm(ctx, &rbac.SetPermReq{
		Perm: &rbac.Perm{
			Scope:            rbacx.Scope,
			Name:             req.Name,
			ResourceRoute:    req.Path,
			ResourceType:     req.PathType,
			ResourceServices: resourceServices,
			Pid:              req.Pid,
		},
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
