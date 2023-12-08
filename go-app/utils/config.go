package utils

import "os"

type Config struct {
	Stage string
	Port  string
}

func LoadConfig() *Config {
	return &Config{
		Stage: os.Getenv("STAGE"),
		Port:  os.Getenv("PORT"),
	}
}
