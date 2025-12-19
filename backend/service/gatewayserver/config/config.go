package config

import (
	"sync"

	"github.com/995933447/easymicro/loader"
	"github.com/995933447/fastlog"
	"github.com/995933447/grpcgateway"
)

const ServerConfigFileName = "gatewayserver"

type ServerConfig struct {
	SamplePProfTimeLongSec int    `mapstructure:"sample_pprof_time_long_sec"`
	Env                    string `mapstructure:"env"`
	HttpHostVar            string `mapstructure:"http_host_var"`
	HttpPort               int    `mapstructure:"http_port"`
	RPCTimeoutMs           int64  `mapstructure:"rpc_timeout_ms"`
}

func (c *ServerConfig) IsDev() bool {
	return c.Env == "dev"
}

func (c *ServerConfig) IsTest() bool {
	return c.Env == "test"
}

func (c *ServerConfig) IsProd() bool {
	return c.Env == "prod"
}

func (c *ServerConfig) GetRPCTimeoutMs() int64 {
	if c.RPCTimeoutMs == 0 {
		return 5000
	}
	return c.RPCTimeoutMs
}

var (
	serverConfig   ServerConfig
	serverConfigMu sync.RWMutex
)

func getServerConfig() *ServerConfig {
	return &serverConfig
}

func SafeReadServerConfig(fn func(c *ServerConfig)) {
	serverConfigMu.RLock()
	defer serverConfigMu.RUnlock()
	fn(getServerConfig())
}

func SafeWriteServerConfig(fn func(c *ServerConfig)) {
	serverConfigMu.Lock()
	defer serverConfigMu.Unlock()
	fn(getServerConfig())
}

func LoadConfig() error {
	var err error
	err = loader.LoadFastlogFromLocal(nil)
	if err != nil {
		return err
	}

	grpcgateway.SetLogger(fastlog.MustDefaultLogger())

	err = loader.LoadAndWatchConfig(ServerConfigFileName, &serverConfig, &serverConfigMu, nil)
	if err != nil {
		return err
	}

	if err = loader.LoadEtcdFromLocal(); err != nil {
		return err
	}

	if err = loader.LoadDiscoveryFromLocal(); err != nil {
		return err
	}

	if err = loader.LoadNatsFromLocal(); err != nil {
		return err
	}

	return nil
}
