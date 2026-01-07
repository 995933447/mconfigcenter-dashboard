package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter/configcenter"
)

func (s *Dashboard) DeleteGeneralConf(ctx context.Context, req *dashboard.DeleteGeneralConfReq) (*dashboard.DeleteGeneralConfResp, error) {
	var resp dashboard.DeleteGeneralConfResp

	if len(req.Ids) == 0 {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "ids is required")
	}

	_, err := configcenter.ConfigCenterGRPC().DeleteConfigs(ctx, &configcenter.DeleteConfigsReq{
		Ids:      req.Ids,
		CollName: req.CollName,
	})
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
