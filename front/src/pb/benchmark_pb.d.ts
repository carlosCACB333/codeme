// package: pb
// file: benchmark.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BenchRes extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): BenchRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BenchRes.AsObject;
    static toObject(includeInstance: boolean, msg: BenchRes): BenchRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BenchRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BenchRes;
    static deserializeBinaryFromReader(message: BenchRes, reader: jspb.BinaryReader): BenchRes;
}

export namespace BenchRes {
    export type AsObject = {
        message: string,
    }
}

export class BenchReq extends jspb.Message { 
    getLen(): number;
    setLen(value: number): BenchReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BenchReq.AsObject;
    static toObject(includeInstance: boolean, msg: BenchReq): BenchReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BenchReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BenchReq;
    static deserializeBinaryFromReader(message: BenchReq, reader: jspb.BinaryReader): BenchReq;
}

export namespace BenchReq {
    export type AsObject = {
        len: number,
    }
}
