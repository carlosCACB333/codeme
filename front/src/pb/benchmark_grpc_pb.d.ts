// package: pb
// file: benchmark.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as benchmark_pb from "./benchmark_pb";
import * as common_pb from "./common_pb";

interface IBenchMarkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    executeBenchMark: IBenchMarkServiceService_IExecuteBenchMark;
}

interface IBenchMarkServiceService_IExecuteBenchMark extends grpc.MethodDefinition<common_pb.GenericReq, common_pb.GenericRes> {
    path: "/pb.BenchMarkService/ExecuteBenchMark";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GenericReq>;
    requestDeserialize: grpc.deserialize<common_pb.GenericReq>;
    responseSerialize: grpc.serialize<common_pb.GenericRes>;
    responseDeserialize: grpc.deserialize<common_pb.GenericRes>;
}

export const BenchMarkServiceService: IBenchMarkServiceService;

export interface IBenchMarkServiceServer extends grpc.UntypedServiceImplementation {
    executeBenchMark: grpc.handleUnaryCall<common_pb.GenericReq, common_pb.GenericRes>;
}

export interface IBenchMarkServiceClient {
    executeBenchMark(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    executeBenchMark(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    executeBenchMark(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}

export class BenchMarkServiceClient extends grpc.Client implements IBenchMarkServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public executeBenchMark(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public executeBenchMark(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
    public executeBenchMark(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.GenericRes) => void): grpc.ClientUnaryCall;
}
