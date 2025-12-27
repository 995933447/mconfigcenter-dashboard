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

func (s *Dashboard) ListGeneralConf(ctx context.Context, req *dashboard.ListGeneralConfReq) (*dashboard.ListGeneralConfResp, error) {
	var resp dashboard.ListGeneralConfResp

	var offset, limit uint32
	if req.Page != nil {
		limit = req.Page.PageSize
		if req.Page.Page > 0 {
			offset = (req.Page.Page - 1) * req.Page.PageSize
		}
	}

	filter := bson.M{}
	if req.Filter != "" {
		if err := jsoniter.UnmarshalFromString(req.Filter, &filter); err != nil {
			return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, fmt.Sprintf("parse filter failed, err:%v", err))
		}
	}

	b, err := bson.Marshal(filter)
	if err != nil {
		fastlog.Errorf("marshal filter failed, err:%v", err)
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInternal, fmt.Sprintf("marshal filter failed, err:%v", err))
	}

	listConfResp, err := configcenter.ConfigCenterGRPC().ListConfig(ctx, &configcenter.ListConfigReq{
		CollName: req.CollName,
		Limit:    limit,
		Offset:   offset,
		Filter:   b,
	})
	if err != nil {
		fastlog.Errorf("list general conf failed, err:%v", err)
		return nil, err
	}

	resp.Total = listConfResp.Total

	for _, item := range listConfResp.List {
		m := bson.M{}
		if err := bson.Unmarshal(item, &m); err != nil {
			fastlog.Errorf("unmarshal item failed, err:%v", err)
			continue
		}

		s, err := jsoniter.MarshalToString(m)
		if err != nil {
			fastlog.Errorf("marshal item failed, err:%v", err)
			continue
		}

		resp.List = append(resp.List, s)
	}

	return &resp, nil
}
