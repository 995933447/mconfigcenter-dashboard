package handler

import (
	"context"

	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter/configcenter"
)

func (s *Dashboard) ListConfSchema(ctx context.Context, req *dashboard.ListConfSchemaReq) (*dashboard.ListConfSchemaResp, error) {
	var resp dashboard.ListConfSchemaResp

	listSchemaResp, err := configcenter.ConfigCenterGRPC().ListConfigSchema(ctx, &configcenter.ListConfigSchemaReq{})
	if err != nil {
		fastlog.Errorf("ListConfigSchema failed, err:%+v", err)
		return nil, err
	}

	for _, schema := range listSchemaResp.List {
		resp.List = append(resp.List, &dashboard.ConfigSchema{
			CollName:      schema.CollName,
			UniqIndexKeys: schema.UniqIndexKeys,
			IndexKeys:     schema.IndexKeys,
			JsonSchema:    schema.JsonSchema,
			Desc:          schema.Desc,
		})
	}

	return &resp, nil
}
