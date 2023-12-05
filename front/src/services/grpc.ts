import * as grpc from "@grpc/grpc-js";

export const insecureCred = grpc.ChannelCredentials.createInsecure();

export const grpcInterceptor = (
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
