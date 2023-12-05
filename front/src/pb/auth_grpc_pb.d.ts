// package: pb
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";
import * as user_pb from "./user_pb";

interface IAuthSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: IAuthSvcService_ISignUp;
    signIn: IAuthSvcService_ISignIn;
}

interface IAuthSvcService_ISignUp extends grpc.MethodDefinition<auth_pb.SignUpReq, auth_pb.SignUpRes> {
    path: "/pb.AuthSvc/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.SignUpReq>;
    requestDeserialize: grpc.deserialize<auth_pb.SignUpReq>;
    responseSerialize: grpc.serialize<auth_pb.SignUpRes>;
    responseDeserialize: grpc.deserialize<auth_pb.SignUpRes>;
}
interface IAuthSvcService_ISignIn extends grpc.MethodDefinition<auth_pb.SignInReq, auth_pb.SignInRes> {
    path: "/pb.AuthSvc/SignIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.SignInReq>;
    requestDeserialize: grpc.deserialize<auth_pb.SignInReq>;
    responseSerialize: grpc.serialize<auth_pb.SignInRes>;
    responseDeserialize: grpc.deserialize<auth_pb.SignInRes>;
}

export const AuthSvcService: IAuthSvcService;

export interface IAuthSvcServer extends grpc.UntypedServiceImplementation {
    signUp: grpc.handleUnaryCall<auth_pb.SignUpReq, auth_pb.SignUpRes>;
    signIn: grpc.handleUnaryCall<auth_pb.SignInReq, auth_pb.SignInRes>;
}

export interface IAuthSvcClient {
    signUp(request: auth_pb.SignUpReq, callback: (error: grpc.ServiceError | null, response: auth_pb.SignUpRes) => void): grpc.ClientUnaryCall;
    signUp(request: auth_pb.SignUpReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.SignUpRes) => void): grpc.ClientUnaryCall;
    signUp(request: auth_pb.SignUpReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.SignUpRes) => void): grpc.ClientUnaryCall;
    signIn(request: auth_pb.SignInReq, callback: (error: grpc.ServiceError | null, response: auth_pb.SignInRes) => void): grpc.ClientUnaryCall;
    signIn(request: auth_pb.SignInReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.SignInRes) => void): grpc.ClientUnaryCall;
    signIn(request: auth_pb.SignInReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.SignInRes) => void): grpc.ClientUnaryCall;
}

export class AuthSvcClient extends grpc.Client implements IAuthSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public signUp(request: auth_pb.SignUpReq, callback: (error: grpc.ServiceError | null, response: auth_pb.SignUpRes) => void): grpc.ClientUnaryCall;
    public signUp(request: auth_pb.SignUpReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.SignUpRes) => void): grpc.ClientUnaryCall;
    public signUp(request: auth_pb.SignUpReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.SignUpRes) => void): grpc.ClientUnaryCall;
    public signIn(request: auth_pb.SignInReq, callback: (error: grpc.ServiceError | null, response: auth_pb.SignInRes) => void): grpc.ClientUnaryCall;
    public signIn(request: auth_pb.SignInReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.SignInRes) => void): grpc.ClientUnaryCall;
    public signIn(request: auth_pb.SignInReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.SignInRes) => void): grpc.ClientUnaryCall;
}
