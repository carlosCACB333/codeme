import { GRPC_PYTHON_URL } from "@/config";
import { BenchMarkSvcClient } from "@/pb/benchmark_grpc_pb";
import { grpcInterceptor, insecureCred } from "../grpc";

export const benchmarkSvc = new BenchMarkSvcClient(
  GRPC_PYTHON_URL,
  insecureCred,
  {
    interceptors: [grpcInterceptor],
  }
);
