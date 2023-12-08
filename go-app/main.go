package main

import (
	"net"
	"os"

	"github.com/carloscacb333/codeme-go/pb"
	"github.com/carloscacb333/codeme-go/server"
	"github.com/carloscacb333/codeme-go/utils"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {

	cfg := utils.LoadConfig()
	if cfg.Stage == "development" {
		log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	}
	runGrpcServer(cfg)
}

func runGrpcServer(cfg *utils.Config) {
	authServer := server.NewBechServer()

	serverOptions := []grpc.ServerOption{}

	grpcServer := grpc.NewServer(serverOptions...)

	pb.RegisterBenchMarkSvcServer(grpcServer, authServer)

	reflection.Register(grpcServer)

	listener, err := net.Listen("tcp", ":"+cfg.Port)
	if err != nil {
		log.Fatal().Msg("cannot start listener: ")
	}

	log.Info().Msg("🚀 Running gRPC server golang on " + listener.Addr().String())

	defer listener.Close()

	if err := grpcServer.Serve(listener); err != nil {
		log.Fatal().Msg("cannot start server: ")
	}
}
