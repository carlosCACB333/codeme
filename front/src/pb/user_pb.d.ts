// package: pb
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getUsername(): string;
    setUsername(value: string): User;
    getFirstname(): string;
    setFirstname(value: string): User;
    getLastname(): string;
    setLastname(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): string | undefined;
    setGender(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;

    hasPicture(): boolean;
    clearPicture(): void;
    getPicture(): string | undefined;
    setPicture(value: string): User;

    hasPhone(): boolean;
    clearPhone(): void;
    getPhone(): string | undefined;
    setPhone(value: string): User;
    getStatus(): string;
    setStatus(value: string): User;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): User;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        gender?: string,
        password: string,
        picture?: string,
        phone?: string,
        status: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
