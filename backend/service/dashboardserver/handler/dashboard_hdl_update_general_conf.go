package handler

import (
	"context"
	"fmt"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter/configcenter"
	jsoniter "github.com/json-iterator/go"
	"go.mongodb.org/mongo-driver/bson"
)

func (s *Dashboard) UpdateGeneralConf(ctx context.Context, req *dashboard.UpdateGeneralConfReq) (*dashboard.UpdateGeneralConfResp, error) {
	var resp dashboard.UpdateGeneralConfResp

	if req.Id == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "id is required")
	}

	if req.CollName == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "collection name is required")
	}

	if req.Value == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "value is required")
	}

	m := bson.M{}
	if err := jsoniter.UnmarshalFromString(req.Value, &m); err != nil {
		fastlog.Importantf("err:%v", err)
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, fmt.Sprintf("value is invalid, unmarshal json failed, err:%v", err))
	}

	b, err := bson.Marshal(m)
	if err != nil {
		fastlog.Importantf("err:%v", err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	_, err = configcenter.ConfigCenterGRPC().UpdateConfig(ctx, &configcenter.UpdateConfigReq{
		CollName:              req.CollName,
		Value:                 b,
		ShouldNotifyListeners: req.ShouldNotifyListeners,
		ListenerGroup:         req.ListenerGroup,
		Id:                    req.Id,
	})
	if err != nil {
		fastlog.Errorf("err:%v", err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	return &resp, nil
}
