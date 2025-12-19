package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/util"
)

func (s *Dashboard) AuthUser(ctx context.Context, req *dashboard.AuthUserReq) (*dashboard.AuthUserResp, error) {
	var resp dashboard.AuthUserResp

	userId, ok, err := util.ParseUserToken(req.Token)
	if err != nil {
		return nil, err
	}

	if !ok {
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeNoAuth)
	}

	resp.UserId = userId

	return &resp, nil
}
