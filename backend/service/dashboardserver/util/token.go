package util

import (
	"fmt"
	"strconv"
	"time"

	"github.com/995933447/fastlog"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/cache"
	"github.com/995933447/routeredis"
	"github.com/golang-jwt/jwt/v5"
)

const TokenSecret = "QWERTYUFGHJ#$%^&*OKJHGFCVBN!@#JH3456"

func GenUserToken(userId uint64) (string, *time.Time, error) {
	expiredAt := time.Now().Add(time.Hour * time.Duration(24))

	claims := &jwt.RegisteredClaims{
		ExpiresAt: jwt.NewNumericDate(expiredAt),
		ID:        fmt.Sprintf("%d", userId),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenStr, err := token.SignedString([]byte(TokenSecret))
	if err != nil {
		return "", nil, err
	}

	err = routeredis.Set(cache.GenUserLoginTokenRKey(userId), tokenStr, 3600*24)
	if err != nil {
		fastlog.Error(err)
		return "", nil, err
	}

	return tokenStr, &expiredAt, nil
}

func ParseUserToken(tokenStr string) (uint64, bool, error) {
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (any, error) {
		return []byte(TokenSecret), nil
	}, jwt.WithValidMethods([]string{jwt.SigningMethodHS256.Alg()}))
	if err != nil {
		return 0, false, err
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return 0, false, nil
	}

	expiresAt, ok := claims["exp"].(float64)
	if !ok {
		return 0, false, nil
	}

	if expiresAt <= float64(time.Now().Unix()) {
		return 0, false, nil
	}

	userIdStr, ok := claims["jti"].(string)
	if !ok {
		return 0, false, nil
	}

	userId, err := strconv.ParseUint(userIdStr, 10, 64)
	if err != nil {
		return 0, false, err
	}

	s, ok, err := routeredis.Get(cache.GenUserLoginTokenRKey(userId))
	if err != nil {
		fastlog.Error(err)
		return 0, false, err
	}

	if s != tokenStr {
		return 0, false, nil
	}

	return userId, true, nil
}
