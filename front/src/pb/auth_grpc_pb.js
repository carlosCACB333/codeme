// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var user_pb = require('./user_pb.js');

function serialize_pb_SignInReq(arg) {
  if (!(arg instanceof auth_pb.SignInReq)) {
    throw new Error('Expected argument of type pb.SignInReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignInReq(buffer_arg) {
  return auth_pb.SignInReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignInRes(arg) {
  if (!(arg instanceof auth_pb.SignInRes)) {
    throw new Error('Expected argument of type pb.SignInRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignInRes(buffer_arg) {
  return auth_pb.SignInRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignUpReq(arg) {
  if (!(arg instanceof auth_pb.SignUpReq)) {
    throw new Error('Expected argument of type pb.SignUpReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignUpReq(buffer_arg) {
  return auth_pb.SignUpReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_SignUpRes(arg) {
  if (!(arg instanceof auth_pb.SignUpRes)) {
    throw new Error('Expected argument of type pb.SignUpRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_SignUpRes(buffer_arg) {
  return auth_pb.SignUpRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthSvcService = exports.AuthSvcService = {
  signUp: {
    path: '/pb.AuthSvc/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignUpReq,
    responseType: auth_pb.SignUpRes,
    requestSerialize: serialize_pb_SignUpReq,
    requestDeserialize: deserialize_pb_SignUpReq,
    responseSerialize: serialize_pb_SignUpRes,
    responseDeserialize: deserialize_pb_SignUpRes,
  },
  signIn: {
    path: '/pb.AuthSvc/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignInReq,
    responseType: auth_pb.SignInRes,
    requestSerialize: serialize_pb_SignInReq,
    requestDeserialize: deserialize_pb_SignInReq,
    responseSerialize: serialize_pb_SignInRes,
    responseDeserialize: deserialize_pb_SignInRes,
  },
};

exports.AuthSvcClient = grpc.makeGenericClientConstructor(AuthSvcService);
