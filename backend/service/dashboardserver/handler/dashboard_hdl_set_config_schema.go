package handler

import (
	"context"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter/configcenter"
)

func (s *Dashboard) SetConfigSchema(ctx context.Context, req *dashboard.SetConfSchemaReq) (*dashboard.SetConfSchemaResp, error) {
	var resp dashboard.SetConfSchemaResp

	_, err := configcenter.ConfigCenterGRPC().SetConfigSchema(ctx, &configcenter.SetConfigSchemaReq{
		Schema: &configcenter.ConfigSchema{
			CollName:      req.ConfigSchema.CollName,
			IndexKeys:     req.ConfigSchema.IndexKeys,
			UniqIndexKeys: req.ConfigSchema.UniqIndexKeys,
			JsonSchema:    req.ConfigSchema.JsonSchema,
			Desc:          req.ConfigSchema.Desc,
		},
	})
	if err != nil {
		fastlog.Errorf("SetConfigSchema err: %v", err)
		return nil, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeInternal)
	}

	return &resp, nil
}
