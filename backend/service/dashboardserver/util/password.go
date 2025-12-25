package util

import (
	"crypto/md5"
	"encoding/hex"

	"github.com/995933447/easymicro/grpc"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/cache"
	"github.com/995933447/routeredis"
	"github.com/deatil/go-cryptobin/cryptobin/rsa"
)

func EqualUserPassword(password, passwordHash string) (bool, error) {
	h, err := HashUserPassword(password)
	if err != nil {
		return false, err
	}
	return h == passwordHash, nil
}

func HashUserPassword(password string) (string, error) {
	hasher := md5.New()
	_, err := hasher.Write([]byte(password))
	if err != nil {
		return "", err
	}
	return hex.EncodeToString(hasher.Sum(nil)), nil
}

func DecryptUserPassword(encrypted string) (string, error) {
	priKey, ok, err := routeredis.Hget(cache.GenRSAKeyHashRKey(), cache.RSAKeyHashRKeyFieldPriKey)
	if err != nil {
		return "", err
	}

	if !ok {
		return "", grpc.NewRPCErr(dashboard.ErrCode_ErrCodeRSAKeysGenerating)
	}

	rsaObj := rsa.New()
	decrypted := rsaObj.FromBase64String(encrypted).FromPrivateKey([]byte(priKey)).Decrypt()
	if decrypted.Error() != nil {
		priKey, ok, err = routeredis.Hget(cache.GenLastRSAKeyHashRKey(), cache.RSAKeyHashRKeyFieldPriKey)
		if err != nil {
			return "", err
		}

		if !ok {
			return "", grpc.NewRPCErr(dashboard.ErrCode_ErrCodePasswordIncorrect)
		}

		decrypted = rsaObj.FromBase64String(encrypted).FromPrivateKey([]byte(priKey)).Decrypt()
		if decrypted.Error() != nil {
			return "", grpc.NewRPCErr(dashboard.ErrCode_ErrCodePasswordIncorrect)
		}
	}

	return decrypted.ToString(), nil
}
