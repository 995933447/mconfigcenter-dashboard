package cache

import (
	"fmt"

	"github.com/995933447/routeredis"
)

const (
	RedisKeyRouteCommon = "default"
)

const (
	RSAKeyHashRKeyFieldPubKey = "pub_key"
	RSAKeyHashRKeyFieldPriKey = "pri_key"
)

const RedisKeyPrefix = "mconfigcenter-dashboard"

func GenRSAKeyHashRKey() *routeredis.Key {
	return routeredis.NewKey(RedisKeyRouteCommon, RedisKeyPrefix+".rsa.hash")
}

func GenLastRSAKeyHashRKey() *routeredis.Key {
	return routeredis.NewKey(RedisKeyRouteCommon, RedisKeyPrefix+".last.rsa.hash")
}

func GenUserLoginTokenRKey(userId uint64) *routeredis.Key {
	return routeredis.NewKey(RedisKeyRouteCommon, fmt.Sprintf(RedisKeyPrefix+".user:%d.login.token", userId))
}
