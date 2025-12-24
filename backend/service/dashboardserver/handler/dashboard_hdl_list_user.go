package handler

import (
	"context"

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
		filter["name"] = bson.M{
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
			RoleIds: []uint64{req.RoleId},
			Scope:   rbacx.Scope,
			Status:  int32(rbac.UserRoleStatus_UserRoleStatusNormal),
		})
		if err != nil {
			fastlog.Error(err)
			return grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
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
