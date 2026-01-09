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

	goconsole.Register("InitMenus", "-i $importDataFilePath", InitMenus)

	goconsole.Run()
}
