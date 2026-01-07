package reqsess

import (
	"context"
	"strconv"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"google.golang.org/grpc/metadata"
)

const (
	CtxKeyUserId = "mconfigcenter-dashboard-user-id"
)

func GetUserIdFromGRPCCtx(ctx context.Context) (uint64, bool, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return 0, false, nil
	}

	userIds := md.Get(CtxKeyUserId)
	if len(userIds) == 0 {
		return 0, false, nil
	}

	userId, err := strconv.ParseUint(userIds[0], 10, 64)
	if err != nil {
		return 0, false, err
	}

	return userId, true, nil
}

func GetUserIdFromGRPCCtxOrErrUserNotFound(ctx context.Context) (uint64, error) {
	userId, ok := GetUserIdFromGRPCCtxSilently(ctx)
	if !ok {
		return 0, grpc.NewRPCErr(commonerr.ErrCode_ErrCodeNoAuth)
	}
	return userId, nil
}

func GetUserIdFromGRPCCtxSilently(ctx context.Context) (uint64, bool) {
	userId, ok, _ := GetUserIdFromGRPCCtx(ctx)
	return userId, ok
}
