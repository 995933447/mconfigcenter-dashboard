package util

import "github.com/995933447/mconfigcenter-dashboard/backend/api/dashboard"

func GenIdGenTbName(dbName, tbName string) string {
	return dashboard.EasymicroGRPCPbServiceNameDashboard + "." + dbName + "." + tbName + "."
}
