import { GRPC_PYTHON_URL, GRPC_RUST_URL } from "@/config";
import { BenchMarkServiceClient } from "@/pb/benchmark_grpc_pb";
import * as grpc from "@grpc/grpc-js";

const cred = grpc.ChannelCredentials.createInsecure();

const interceptor = (
  options: grpc.InterceptorOptions,
  nextCall: grpc.NextCall
) => {
  return new grpc.InterceptingCall(nextCall(options), {
    start: async (metadata, listener, next) => {
      // TODO: add token to metadata
      next(metadata, listener);
    },
  });
};

export const rustBenchmarkService = new BenchMarkServiceClient(
  GRPC_RUST_URL,
  cred,
  {
    interceptors: [interceptor],
  }
);

export const pythonBenchmarkService = new BenchMarkServiceClient(
  GRPC_PYTHON_URL,
  cred,
  {
    interceptors: [interceptor],
  }
);
