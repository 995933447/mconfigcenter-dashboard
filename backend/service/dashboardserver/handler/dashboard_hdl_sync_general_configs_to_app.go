package handler

import (
	"context"

	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter/configcenter"
	"github.com/995933447/runtimeutil"
)

func (s *Dashboard) SyncGeneralConfigsToApp(ctx context.Context, req *dashboard.SyncGeneralConfigsToAppReq) (*dashboard.SyncGeneralConfigsToAppResp, error) {
	var resp dashboard.SyncGeneralConfigsToAppResp

	eg := runtimeutil.NewErrGrp()
	for _, group := range req.ListenerGroups {
		eg.Go(func() error {
			_, err := configcenter.ConfigCenterGRPC().NotifyListenersReloadConfig(ctx, &configcenter.NotifyListenersReloadConfigReq{
				ListenerGroup: group,
				CollNames:     req.CollNames,
			})
			if err != nil {
				fastlog.Error(err)
				return err
			}
			return nil
		})
	}
	if err := eg.Wait(); err != nil {
		fastlog.Error(err)
		return nil, err
	}

	return &resp, nil
}
