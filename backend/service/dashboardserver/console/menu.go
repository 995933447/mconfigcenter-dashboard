package main

import (
	"context"
	"log"
	"os"

	"github.com/995933447/rbac/rbac"
	"github.com/995933447/runtimeutil"
	"github.com/995933447/std-go/scan"
	jsoniter "github.com/json-iterator/go"
)

func InitMenus() {
	dataFilePath := scan.OptStr("i")
	b, err := os.ReadFile(dataFilePath)
	if err != nil {
		log.Fatal(runtimeutil.NewStackErr(err))
	}

	var perms []*rbac.Perm
	if err := jsoniter.Unmarshal(b, &perms); err != nil {
		log.Fatal(runtimeutil.NewStackErr(err))
	}

	for _, perm := range perms {
		_, err = rbac.RBACGRPC().SetPerm(context.TODO(), &rbac.SetPermReq{
			Perm: perm,
		})
		if err != nil {
			log.Fatal(runtimeutil.NewStackErr(err))
		}
	}
}
