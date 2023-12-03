// package: pb
// file: directory.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class DirRes extends jspb.Message { 
    getId(): string;
    setId(value: string): DirRes;
    getName(): string;
    setName(value: string): DirRes;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): string | undefined;
    setContent(value: string): DirRes;

    hasParentid(): boolean;
    clearParentid(): void;
    getParentid(): string | undefined;
    setParentid(value: string): DirRes;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): DirRes;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): DirRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DirRes.AsObject;
    static toObject(includeInstance: boolean, msg: DirRes): DirRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DirRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DirRes;
    static deserializeBinaryFromReader(message: DirRes, reader: jspb.BinaryReader): DirRes;
}

export namespace DirRes {
    export type AsObject = {
        id: string,
        name: string,
        content?: string,
        parentid?: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateDirReq extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateDirReq;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): string | undefined;
    setContent(value: string): CreateDirReq;

    hasParentid(): boolean;
    clearParentid(): void;
    getParentid(): string | undefined;
    setParentid(value: string): CreateDirReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDirReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDirReq): CreateDirReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDirReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDirReq;
    static deserializeBinaryFromReader(message: CreateDirReq, reader: jspb.BinaryReader): CreateDirReq;
}

export namespace CreateDirReq {
    export type AsObject = {
        name: string,
        content?: string,
        parentid?: string,
    }
}
