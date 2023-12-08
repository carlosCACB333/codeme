// package: pb
// file: docker.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class ExecuteCodeReq extends jspb.Message { 
    getCode(): string;
    setCode(value: string): ExecuteCodeReq;
    getLang(): string;
    setLang(value: string): ExecuteCodeReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteCodeReq.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteCodeReq): ExecuteCodeReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteCodeReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteCodeReq;
    static deserializeBinaryFromReader(message: ExecuteCodeReq, reader: jspb.BinaryReader): ExecuteCodeReq;
}

export namespace ExecuteCodeReq {
    export type AsObject = {
        code: string,
        lang: string,
    }
}

export class ExecuteCodeResp extends jspb.Message { 
    getStatus(): common_pb.STATUS;
    setStatus(value: common_pb.STATUS): ExecuteCodeResp;
    getOutput(): string;
    setOutput(value: string): ExecuteCodeResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteCodeResp.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteCodeResp): ExecuteCodeResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteCodeResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteCodeResp;
    static deserializeBinaryFromReader(message: ExecuteCodeResp, reader: jspb.BinaryReader): ExecuteCodeResp;
}

export namespace ExecuteCodeResp {
    export type AsObject = {
        status: common_pb.STATUS,
        output: string,
    }
}
