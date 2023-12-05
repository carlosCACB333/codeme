// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var docker_pb = require('./docker_pb.js');

function serialize_pb_ExecuteCodeReq(arg) {
  if (!(arg instanceof docker_pb.ExecuteCodeReq)) {
    throw new Error('Expected argument of type pb.ExecuteCodeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExecuteCodeReq(buffer_arg) {
  return docker_pb.ExecuteCodeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_ExecuteCodeResp(arg) {
  if (!(arg instanceof docker_pb.ExecuteCodeResp)) {
    throw new Error('Expected argument of type pb.ExecuteCodeResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_ExecuteCodeResp(buffer_arg) {
  return docker_pb.ExecuteCodeResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var DockerSvcService = exports.DockerSvcService = {
  executeCode: {
    path: '/pb.DockerSvc/ExecuteCode',
    requestStream: false,
    responseStream: true,
    requestType: docker_pb.ExecuteCodeReq,
    responseType: docker_pb.ExecuteCodeResp,
    requestSerialize: serialize_pb_ExecuteCodeReq,
    requestDeserialize: deserialize_pb_ExecuteCodeReq,
    responseSerialize: serialize_pb_ExecuteCodeResp,
    responseDeserialize: deserialize_pb_ExecuteCodeResp,
  },
};

exports.DockerSvcClient = grpc.makeGenericClientConstructor(DockerSvcService);
