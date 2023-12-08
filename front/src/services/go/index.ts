import { GRPC_GO_URL } from "@/config";
import { BenchMarkSvcClient } from "@/pb/benchmark_grpc_pb";
import { grpcInterceptor, insecureCred } from "../grpc";

export const benchmarkSvc = new BenchMarkSvcClient(GRPC_GO_URL, insecureCred, {
  interceptors: [grpcInterceptor],
});
