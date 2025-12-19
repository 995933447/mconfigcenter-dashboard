package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/cache"
	"github.com/995933447/routeredis"
)

func (s *Dashboard) GetRSAPubKey(ctx context.Context, req *dashboard.GetRSAPubKeyReq) (*dashboard.GetRSAPubKeyResp, error) {
	var resp dashboard.GetRSAPubKeyResp

	pubKey, ok, err := routeredis.Hget(cache.GenRSAKeyHashRKey(), cache.RSAKeyHashRKeyFieldPubKey)
	if err != nil {
		fastlog.Errorf("GetRSAPubKey failed, %v", err)
		return nil, err
	}

	if !ok {
		return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodeRSAKeysGenerating)
	}

	resp.Key = pubKey

	return &resp, nil
}
