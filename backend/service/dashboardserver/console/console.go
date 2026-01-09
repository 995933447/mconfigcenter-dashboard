package main

import (
	"context"
	"log"

	"github.com/995933447/goconsole"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/boot"
	"github.com/995933447/mconfigcenter-dashboard/backend/service/dashboardserver/config"
	"github.com/995933447/runtimeutil"
)

func main() {
	if err := boot.InitNode("dashboard"); err != nil {
		log.Fatal(runtimeutil.NewStackErr(err))
	}

	if err := config.LoadConfig(); err != nil {
		log.Fatal(runtimeutil.NewStackErr(err))
	}

	boot.InitRouteredis()

	if err := boot.InitElect(context.TODO()); err != nil {
		log.Fatal(runtimeutil.NewStackErr(err))
	}

	if err := boot.InitMgorm(); err != nil {
		log.Fatal(runtimeutil.NewStackErr(err))
	}

	if err := boot.PrepareDiscoverGRPC(); err != nil {
		log.Fatal(runtimeutil.NewStackErr(err))
	}

	goconsole.Register("InitMenus", "初始化菜单,参数:-i $importDataFilePath:导入菜单mongo数据文件,必须", InitMenus)

	goconsole.Run()
}
