// package: pb
// file: docker.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as docker_pb from "./docker_pb";

interface IDockerSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    executeCode: IDockerSvcService_IExecuteCode;
}

interface IDockerSvcService_IExecuteCode extends grpc.MethodDefinition<docker_pb.ExecuteCodeReq, docker_pb.ExecuteCodeResp> {
    path: "/pb.DockerSvc/ExecuteCode";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<docker_pb.ExecuteCodeReq>;
    requestDeserialize: grpc.deserialize<docker_pb.ExecuteCodeReq>;
    responseSerialize: grpc.serialize<docker_pb.ExecuteCodeResp>;
    responseDeserialize: grpc.deserialize<docker_pb.ExecuteCodeResp>;
}

export const DockerSvcService: IDockerSvcService;

export interface IDockerSvcServer extends grpc.UntypedServiceImplementation {
    executeCode: grpc.handleServerStreamingCall<docker_pb.ExecuteCodeReq, docker_pb.ExecuteCodeResp>;
}

export interface IDockerSvcClient {
    executeCode(request: docker_pb.ExecuteCodeReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<docker_pb.ExecuteCodeResp>;
    executeCode(request: docker_pb.ExecuteCodeReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<docker_pb.ExecuteCodeResp>;
}

export class DockerSvcClient extends grpc.Client implements IDockerSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public executeCode(request: docker_pb.ExecuteCodeReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<docker_pb.ExecuteCodeResp>;
    public executeCode(request: docker_pb.ExecuteCodeReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<docker_pb.ExecuteCodeResp>;
}
