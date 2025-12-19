package handler

import (
	"context"
	"errors"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/commonerr"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/cache"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/util"
	"github.com/995933447/routeredis"
	"github.com/995933447/runtimeutil"
	"github.com/deatil/go-cryptobin/cryptobin/rsa"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func (s *Dashboard) Login(ctx context.Context, req *dashboard.LoginReq) (*dashboard.LoginResp, error) {
	var resp dashboard.LoginResp

	if req.Username == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "username is required")
	}

	if req.Password == "" {
		return nil, grpc.NewRPCErrWithMsg(commonerr.ErrCode_ErrCodeInvalidParam, "password is required")
	}

	mod := dashboard.NewUserModel()
	user, err := mod.FindOneByUsername(ctx, req.Username)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodeUserNotFound)
		}
	}

	priKey, ok, err := routeredis.Hget(cache.GenRSAKeyHashRKey(), cache.RSAKeyHashRKeyFieldPriKey)
	if err != nil {
		fastlog.Error(err)
		return nil, err
	}

	if !ok {
		return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodeRSAKeysGenerating)
	}

	rsaObj := rsa.New()
	decrypted := rsaObj.FromBase64String(req.Password).FromPrivateKey([]byte(priKey)).Decrypt()
	if decrypted.Error() != nil {
		priKey, ok, err = routeredis.Hget(cache.GenLastRSAKeyHashRKey(), cache.RSAKeyHashRKeyFieldPriKey)
		if err != nil {
			fastlog.Error(err)
			return nil, err
		}

		if !ok {
			return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodePasswordIncorrect)
		}

		decrypted = rsaObj.FromBase64String(req.Password).FromPrivateKey([]byte(priKey)).Decrypt()
		if decrypted.Error() != nil {
			return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodePasswordIncorrect)
		}
	}

	password := decrypted.ToString()
	ok, err = util.EqualUserPassword(password, user.Password)
	if err != nil {
		return nil, err
	}

	if !ok {
		return nil, grpc.NewRPCErr(dashboard.ErrCode_ErrCodePasswordIncorrect)
	}

	token, expiredAt, err := util.GenUserToken(user.UserId)
	if err != nil {
		return nil, err
	}

	resp.Token = token
	resp.ExpireAt = expiredAt.Unix()

	runtimeutil.Go(func() {
		_, err := mod.UpdateOneByUserId(context.TODO(), user.UserId, bson.M{
			"last_login_at": runtimeutil.GetNowUnixFast(),
		})
		if err != nil {
			fastlog.Error(err)
		}
	})

	return &resp, nil
}
