import { GRPC_RUST_URL } from "@/config";
import { BenchMarkSvcClient } from "@/pb/benchmark_grpc_pb";
import { DockerSvcClient } from "@/pb/docker_grpc_pb";
import { grpcInterceptor, insecureCred } from "../grpc";

export const benchmarkSvc = new BenchMarkSvcClient(
  GRPC_RUST_URL,
  insecureCred,
  {
    interceptors: [grpcInterceptor],
  }
);

export const dockerSvc = new DockerSvcClient(GRPC_RUST_URL, insecureCred, {
  interceptors: [grpcInterceptor],
});
