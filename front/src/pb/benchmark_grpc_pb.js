// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var benchmark_pb = require('./benchmark_pb.js');

function serialize_pb_BenchReq(arg) {
  if (!(arg instanceof benchmark_pb.BenchReq)) {
    throw new Error('Expected argument of type pb.BenchReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_BenchReq(buffer_arg) {
  return benchmark_pb.BenchReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_BenchRes(arg) {
  if (!(arg instanceof benchmark_pb.BenchRes)) {
    throw new Error('Expected argument of type pb.BenchRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_BenchRes(buffer_arg) {
  return benchmark_pb.BenchRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var BenchMarkSvcService = exports.BenchMarkSvcService = {
  executeBenchMark: {
    path: '/pb.BenchMarkSvc/ExecuteBenchMark',
    requestStream: false,
    responseStream: false,
    requestType: benchmark_pb.BenchReq,
    responseType: benchmark_pb.BenchRes,
    requestSerialize: serialize_pb_BenchReq,
    requestDeserialize: deserialize_pb_BenchReq,
    responseSerialize: serialize_pb_BenchRes,
    responseDeserialize: deserialize_pb_BenchRes,
  },
};

exports.BenchMarkSvcClient = grpc.makeGenericClientConstructor(BenchMarkSvcService);
