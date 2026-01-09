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

type PermTreeItem struct {
	Data     *rbac.Perm
	Children []*PermTreeItem
}

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

	permTreeItemMap := make(map[uint64]*PermTreeItem)
	for _, perm := range perms {
		permTreeItem := &PermTreeItem{Data: perm}
		permTreeItemMap[perm.PermId] = permTreeItem
	}

	var premTree []*PermTreeItem
	for _, perm := range perms {
		treeItem := permTreeItemMap[perm.PermId]
		if perm.Pid > 0 {
			parent := permTreeItemMap[perm.Pid]
			parent.Children = append(parent.Children, treeItem)
		} else {
			premTree = append(premTree, treeItem)
		}
	}

	var reverseSetPerm func(item *PermTreeItem)

	reverseSetPerm = func(perm *PermTreeItem) {
		fakeId := perm.Data.PermId
		perm.Data.PermId = 0
		setPermResp, err := rbac.RBACGRPC().SetPerm(context.TODO(), &rbac.SetPermReq{
			Perm: perm.Data,
		})
		if err != nil {
			log.Fatal(runtimeutil.NewStackErr(err))
		}

		perm.Data.PermId = setPermResp.PermId

		permTreeItem := permTreeItemMap[fakeId]
		for _, child := range permTreeItem.Children {
			child.Data.Pid = setPermResp.PermId
		}

		for _, child := range permTreeItem.Children {
			reverseSetPerm(child)
		}
	}

	for _, perm := range premTree {
		reverseSetPerm(perm)
	}
}
