package boot

import (
	"context"
	"errors"
	"time"

	"git.888.fun/backend/afun-golang-pkg/qgframe/runtime"
	"github.com/995933447/easymicro/elect"
	"github.com/995933447/fastlog"
	"github.com/995933447/idgen/idgen"
	"github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"
	"github.com/995933447/mconfigcenter-dashboard/backend/common/rbacx"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/cache"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/util"
	"github.com/995933447/rbac/rbac"
	"github.com/995933447/routeredis"
	"github.com/deatil/go-cryptobin/cryptobin/rsa"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func InitApp() {
	// 初始化首位系统用户
	checkAndCreateFirstSuperAdminUser()
	// 创建系统rsa key
	loopAndRefreshRSAKeys()
}

func checkAndCreateFirstSuperAdminUser() {
	var userId uint64
	mod := dashboard.NewUserModel()
	user, err := mod.FindOneByUsername(context.TODO(), util.FirstSuperAdminUserName)
	if err == nil {
		userId = user.UserId
	} else {
		if !errors.Is(err, mongo.ErrNoDocuments) {
			fastlog.Fatal(err)
		}

		allocIdResp, err := idgen.IdGenGRPC().AllocId(context.TODO(), &idgen.AllocIdReq{
			TbName: util.GenIdGenTbName(mod.GetDb(), mod.GetTb()),
		})
		if err != nil {
			fastlog.Fatal(err)
		}

		passwordHash, err := util.HashUserPassword(util.FirstSuperAdminDefaultPassword)
		if err != nil {
			fastlog.Fatal(err)
		}

		_, err = mod.Upsert(context.TODO(), bson.M{
			"username": util.FirstSuperAdminUserName,
		}, bson.M{
			"user_id":  allocIdResp.Id,
			"status":   dashboard.UserStatus_UserStatusNormal,
			"password": passwordHash,
		})
		if err != nil {
			fastlog.Fatal(err)
		}

		userId = allocIdResp.Id

		user, err = mod.FindOneByUserId(context.TODO(), userId)
		if err != nil {
			fastlog.Fatal(err)
		}
	}

	listUserRoleResp, err := rbac.RBACGRPC().ListUserRole(context.TODO(), &rbac.ListUserRoleReq{
		Scope:   rbacx.Scope,
		UserIds: []uint64{userId},
		Page:    &rbac.Page{},
	})
	if err != nil {
		fastlog.Fatal(err)
	}

	if len(listUserRoleResp.List) > 0 {
		var roleIds []uint64
		for _, userRole := range listUserRoleResp.List {
			roleIds = append(roleIds, userRole.UserRole.RoleId)
		}

		listRoleResp, err := rbac.RBACGRPC().ListRole(context.TODO(), &rbac.ListRoleReq{
			Scope:   rbacx.Scope,
			RoleIds: roleIds,
			Page:    &rbac.Page{},
		})
		if err != nil {
			fastlog.Fatal(err)
		}

		if len(listRoleResp.List) > 0 {
			var existsSuperAdminRole bool
			for _, role := range listRoleResp.List {
				if role.IsSuperAdmin {
					existsSuperAdminRole = true
					break
				}
			}

			if existsSuperAdminRole {
				return
			}
		}
	}

	listRoleResp, err := rbac.RBACGRPC().ListRole(context.TODO(), &rbac.ListRoleReq{
		Scope: rbacx.Scope,
		Name:  util.FirstSuperAdminRoleName,
		Page:  &rbac.Page{},
	})
	if err != nil {
		fastlog.Fatal(err)
	}

	var roleId uint64
	if len(listRoleResp.List) == 0 {
		setRoleResp, err := rbac.RBACGRPC().SetRole(context.TODO(), &rbac.SetRoleReq{
			Role: &rbac.Role{
				Name:         util.FirstSuperAdminRoleName,
				Scope:        rbacx.Scope,
				Status:       int32(rbac.RoleStatus_RoleStatusNormal),
				IsSuperAdmin: true,
				Remark:       "init admin role for mconfigcenter-dashboard",
			},
		})
		if err != nil {
			fastlog.Fatal(err)
		}

		roleId = setRoleResp.RoleId
	} else {
		roleId = listRoleResp.List[0].RoleId
	}

	_, err = rbac.RBACGRPC().SetUserRole(context.TODO(), &rbac.SetUserRoleReq{
		UserRole: &rbac.UserRole{
			RoleId: roleId,
			UserId: userId,
			Status: int32(dashboard.UserStatus_UserStatusNormal),
			Scope:  rbacx.Scope,
		},
	})
	if err != nil {
		fastlog.Fatal(err)
	}

	roleIds := append(user.RoleIds, roleId)
	_, err = mod.UpdateOneByUserId(context.TODO(), userId, bson.M{
		"role_ids": roleIds,
	})
	if err != nil {
		fastlog.Fatal(err)
	}
}

func loopAndRefreshRSAKeys() {
	runtime.Go(func() {
		for {
			time.Sleep(time.Second)

			isMaster, err := elect.IsMaster()
			if err != nil {
				fastlog.Error(err)
				continue
			}

			if !isMaster {
				continue
			}

			r := rsa.New().GenerateKey(2048)
			priKey := r.CreatePrivateKey().ToKeyString()
			pubKey := r.CreatePKCS1PublicKey().ToKeyString()

			rKey := cache.GenRSAKeyHashRKey()
			m, ok, err := routeredis.Hgetall(rKey)
			if err != nil {
				fastlog.Error(err)
				continue
			}

			err = routeredis.Hmset(60, rKey, cache.RSAKeyHashRKeyFieldPubKey, pubKey, cache.RSAKeyHashRKeyFieldPriKey, priKey)
			if err != nil {
				fastlog.Error(err)
				continue
			}

			if ok {
				var kvs []any
				for k, v := range m {
					kvs = append(kvs, k, v)
				}
				err = routeredis.Hmset(60, cache.GenLastRSAKeyHashRKey(), kvs...)
				if err != nil {
					fastlog.Error(err)
					continue
				}
			}
		}
	})
}
