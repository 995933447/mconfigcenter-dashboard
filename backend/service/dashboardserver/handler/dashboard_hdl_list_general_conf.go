package handler

import (
    "context"
    "github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
)

func (s *Dashboard) ListGeneralConf(ctx context.Context, req *dashboard.ListGeneralConfReq) (*dashboard.ListGeneralConfResp, error) {
	var resp dashboard.ListGeneralConfResp
	return &resp, nil
}