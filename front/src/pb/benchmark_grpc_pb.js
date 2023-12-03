// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_pb = require('./common_pb.js');

function serialize_pb_GenericReq(arg) {
  if (!(arg instanceof common_pb.GenericReq)) {
    throw new Error('Expected argument of type pb.GenericReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GenericReq(buffer_arg) {
  return common_pb.GenericReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GenericRes(arg) {
  if (!(arg instanceof common_pb.GenericRes)) {
    throw new Error('Expected argument of type pb.GenericRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GenericRes(buffer_arg) {
  return common_pb.GenericRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var BenchMarkServiceService = exports.BenchMarkServiceService = {
  executeBenchMark: {
    path: '/pb.BenchMarkService/ExecuteBenchMark',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GenericReq,
    responseType: common_pb.GenericRes,
    requestSerialize: serialize_pb_GenericReq,
    requestDeserialize: deserialize_pb_GenericReq,
    responseSerialize: serialize_pb_GenericRes,
    responseDeserialize: deserialize_pb_GenericRes,
  },
};

exports.BenchMarkServiceClient = grpc.makeGenericClientConstructor(BenchMarkServiceService);
