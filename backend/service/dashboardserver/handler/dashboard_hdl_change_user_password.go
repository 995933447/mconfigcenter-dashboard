package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/reqsess"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/util"
	"go.mongodb.org/mongo-driver/bson"
)

func (s *Dashboard) ChangeUserPassword(ctx context.Context, req *dashboard.ChangeUserPasswordReq) (*dashboard.ChangeUserPasswordResp, error) {
	var resp dashboard.ChangeUserPasswordResp

	if req.NewPassword == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "empty new password")
	}

	userId, ok := reqsess.GetUserIdFromGRPCCtxSilently(ctx)
	if !ok {
		return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodeUserNotFound)
	}

	password, err := util.DecryptUserPassword(req.NewPassword)
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	password, err = util.HashUserPassword(password)
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	_, err = dashboard.NewUserModel().UpdateOneByUserId(ctx, userId, bson.M{
		"password": password,
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
