// package: pb
// file: directory.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as directory_pb from "./directory_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

interface IDirServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IDirServiceService_ICreate;
    getAll: IDirServiceService_IGetAll;
    getById: IDirServiceService_IGetById;
}

interface IDirServiceService_ICreate extends grpc.MethodDefinition<directory_pb.CreateDirReq, directory_pb.DirRes> {
    path: "/pb.DirService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<directory_pb.CreateDirReq>;
    requestDeserialize: grpc.deserialize<directory_pb.CreateDirReq>;
    responseSerialize: grpc.serialize<directory_pb.DirRes>;
    responseDeserialize: grpc.deserialize<directory_pb.DirRes>;
}
interface IDirServiceService_IGetAll extends grpc.MethodDefinition<common_pb.Empty, directory_pb.DirRes> {
    path: "/pb.DirService/GetAll";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<directory_pb.DirRes>;
    responseDeserialize: grpc.deserialize<directory_pb.DirRes>;
}
interface IDirServiceService_IGetById extends grpc.MethodDefinition<common_pb.GenericReq, directory_pb.DirRes> {
    path: "/pb.DirService/GetById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.GenericReq>;
    requestDeserialize: grpc.deserialize<common_pb.GenericReq>;
    responseSerialize: grpc.serialize<directory_pb.DirRes>;
    responseDeserialize: grpc.deserialize<directory_pb.DirRes>;
}

export const DirServiceService: IDirServiceService;

export interface IDirServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<directory_pb.CreateDirReq, directory_pb.DirRes>;
    getAll: grpc.handleServerStreamingCall<common_pb.Empty, directory_pb.DirRes>;
    getById: grpc.handleUnaryCall<common_pb.GenericReq, directory_pb.DirRes>;
}

export interface IDirServiceClient {
    create(request: directory_pb.CreateDirReq, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    create(request: directory_pb.CreateDirReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    create(request: directory_pb.CreateDirReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    getAll(request: common_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<directory_pb.DirRes>;
    getAll(request: common_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<directory_pb.DirRes>;
    getById(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    getById(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    getById(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
}

export class DirServiceClient extends grpc.Client implements IDirServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: directory_pb.CreateDirReq, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    public create(request: directory_pb.CreateDirReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    public create(request: directory_pb.CreateDirReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    public getAll(request: common_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<directory_pb.DirRes>;
    public getAll(request: common_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<directory_pb.DirRes>;
    public getById(request: common_pb.GenericReq, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    public getById(request: common_pb.GenericReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
    public getById(request: common_pb.GenericReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: directory_pb.DirRes) => void): grpc.ClientUnaryCall;
}
