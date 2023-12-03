// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var directory_pb = require('./directory_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_pb_CreateDirReq(arg) {
  if (!(arg instanceof directory_pb.CreateDirReq)) {
    throw new Error('Expected argument of type pb.CreateDirReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateDirReq(buffer_arg) {
  return directory_pb.CreateDirReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DirRes(arg) {
  if (!(arg instanceof directory_pb.DirRes)) {
    throw new Error('Expected argument of type pb.DirRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DirRes(buffer_arg) {
  return directory_pb.DirRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_Empty(arg) {
  if (!(arg instanceof common_pb.Empty)) {
    throw new Error('Expected argument of type pb.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Empty(buffer_arg) {
  return common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GenericReq(arg) {
  if (!(arg instanceof common_pb.GenericReq)) {
    throw new Error('Expected argument of type pb.GenericReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GenericReq(buffer_arg) {
  return common_pb.GenericReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var DirServiceService = exports.DirServiceService = {
  create: {
    path: '/pb.DirService/Create',
    requestStream: false,
    responseStream: false,
    requestType: directory_pb.CreateDirReq,
    responseType: directory_pb.DirRes,
    requestSerialize: serialize_pb_CreateDirReq,
    requestDeserialize: deserialize_pb_CreateDirReq,
    responseSerialize: serialize_pb_DirRes,
    responseDeserialize: deserialize_pb_DirRes,
  },
  getAll: {
    path: '/pb.DirService/GetAll',
    requestStream: false,
    responseStream: true,
    requestType: common_pb.Empty,
    responseType: directory_pb.DirRes,
    requestSerialize: serialize_pb_Empty,
    requestDeserialize: deserialize_pb_Empty,
    responseSerialize: serialize_pb_DirRes,
    responseDeserialize: deserialize_pb_DirRes,
  },
  getById: {
    path: '/pb.DirService/GetById',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GenericReq,
    responseType: directory_pb.DirRes,
    requestSerialize: serialize_pb_GenericReq,
    requestDeserialize: deserialize_pb_GenericReq,
    responseSerialize: serialize_pb_DirRes,
    responseDeserialize: deserialize_pb_DirRes,
  },
};

exports.DirServiceClient = grpc.makeGenericClientConstructor(DirServiceService);
