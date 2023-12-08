// package: pb
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as user_pb from "./user_pb";
import * as common_pb from "./common_pb";

export class SignUpReq extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): SignUpReq;
    getFirstname(): string;
    setFirstname(value: string): SignUpReq;
    getLastname(): string;
    setLastname(value: string): SignUpReq;
    getEmail(): string;
    setEmail(value: string): SignUpReq;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): string | undefined;
    setGender(value: string): SignUpReq;
    getPassword(): string;
    setPassword(value: string): SignUpReq;

    hasPicture(): boolean;
    clearPicture(): void;
    getPicture(): string | undefined;
    setPicture(value: string): SignUpReq;

    hasPhone(): boolean;
    clearPhone(): void;
    getPhone(): string | undefined;
    setPhone(value: string): SignUpReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpReq.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpReq): SignUpReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpReq;
    static deserializeBinaryFromReader(message: SignUpReq, reader: jspb.BinaryReader): SignUpReq;
}

export namespace SignUpReq {
    export type AsObject = {
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        gender?: string,
        password: string,
        picture?: string,
        phone?: string,
    }
}

export class SignUpRes extends jspb.Message { 
    getStatus(): common_pb.STATUS;
    setStatus(value: common_pb.STATUS): SignUpRes;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): user_pb.User | undefined;
    setUser(value?: user_pb.User): SignUpRes;

    hasToken(): boolean;
    clearToken(): void;
    getToken(): string | undefined;
    setToken(value: string): SignUpRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRes.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRes): SignUpRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRes;
    static deserializeBinaryFromReader(message: SignUpRes, reader: jspb.BinaryReader): SignUpRes;
}

export namespace SignUpRes {
    export type AsObject = {
        status: common_pb.STATUS,
        user?: user_pb.User.AsObject,
        token?: string,
    }
}

export class SignInReq extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): SignInReq;
    getPassword(): string;
    setPassword(value: string): SignInReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInReq.AsObject;
    static toObject(includeInstance: boolean, msg: SignInReq): SignInReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInReq;
    static deserializeBinaryFromReader(message: SignInReq, reader: jspb.BinaryReader): SignInReq;
}

export namespace SignInReq {
    export type AsObject = {
        username: string,
        password: string,
    }
}

export class SignInRes extends jspb.Message { 
    getStatus(): common_pb.STATUS;
    setStatus(value: common_pb.STATUS): SignInRes;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): user_pb.User | undefined;
    setUser(value?: user_pb.User): SignInRes;

    hasToken(): boolean;
    clearToken(): void;
    getToken(): string | undefined;
    setToken(value: string): SignInRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInRes.AsObject;
    static toObject(includeInstance: boolean, msg: SignInRes): SignInRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInRes;
    static deserializeBinaryFromReader(message: SignInRes, reader: jspb.BinaryReader): SignInRes;
}

export namespace SignInRes {
    export type AsObject = {
        status: common_pb.STATUS,
        user?: user_pb.User.AsObject,
        token?: string,
    }
}
