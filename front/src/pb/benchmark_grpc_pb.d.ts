// package: pb
// file: benchmark.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as benchmark_pb from "./benchmark_pb";
import * as common_pb from "./common_pb";

interface IBenchMarkSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    executeBenchMark: IBenchMarkSvcService_IExecuteBenchMark;
}

interface IBenchMarkSvcService_IExecuteBenchMark extends grpc.MethodDefinition<benchmark_pb.BenchReq, benchmark_pb.BenchRes> {
    path: "/pb.BenchMarkSvc/ExecuteBenchMark";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<benchmark_pb.BenchReq>;
    requestDeserialize: grpc.deserialize<benchmark_pb.BenchReq>;
    responseSerialize: grpc.serialize<benchmark_pb.BenchRes>;
    responseDeserialize: grpc.deserialize<benchmark_pb.BenchRes>;
}

export const BenchMarkSvcService: IBenchMarkSvcService;

export interface IBenchMarkSvcServer extends grpc.UntypedServiceImplementation {
    executeBenchMark: grpc.handleUnaryCall<benchmark_pb.BenchReq, benchmark_pb.BenchRes>;
}

export interface IBenchMarkSvcClient {
    executeBenchMark(request: benchmark_pb.BenchReq, callback: (error: grpc.ServiceError | null, response: benchmark_pb.BenchRes) => void): grpc.ClientUnaryCall;
    executeBenchMark(request: benchmark_pb.BenchReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: benchmark_pb.BenchRes) => void): grpc.ClientUnaryCall;
    executeBenchMark(request: benchmark_pb.BenchReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: benchmark_pb.BenchRes) => void): grpc.ClientUnaryCall;
}

export class BenchMarkSvcClient extends grpc.Client implements IBenchMarkSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public executeBenchMark(request: benchmark_pb.BenchReq, callback: (error: grpc.ServiceError | null, response: benchmark_pb.BenchRes) => void): grpc.ClientUnaryCall;
    public executeBenchMark(request: benchmark_pb.BenchReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: benchmark_pb.BenchRes) => void): grpc.ClientUnaryCall;
    public executeBenchMark(request: benchmark_pb.BenchReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: benchmark_pb.BenchRes) => void): grpc.ClientUnaryCall;
}
