# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import auth_pb2 as auth__pb2


class AuthSvcStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SignUp = channel.unary_unary(
                '/pb.AuthSvc/SignUp',
                request_serializer=auth__pb2.SignUpReq.SerializeToString,
                response_deserializer=auth__pb2.SignUpRes.FromString,
                )
        self.SignIn = channel.unary_unary(
                '/pb.AuthSvc/SignIn',
                request_serializer=auth__pb2.SignInReq.SerializeToString,
                response_deserializer=auth__pb2.SignInRes.FromString,
                )


class AuthSvcServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SignUp(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SignIn(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AuthSvcServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SignUp': grpc.unary_unary_rpc_method_handler(
                    servicer.SignUp,
                    request_deserializer=auth__pb2.SignUpReq.FromString,
                    response_serializer=auth__pb2.SignUpRes.SerializeToString,
            ),
            'SignIn': grpc.unary_unary_rpc_method_handler(
                    servicer.SignIn,
                    request_deserializer=auth__pb2.SignInReq.FromString,
                    response_serializer=auth__pb2.SignInRes.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'pb.AuthSvc', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class AuthSvc(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SignUp(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.AuthSvc/SignUp',
            auth__pb2.SignUpReq.SerializeToString,
            auth__pb2.SignUpRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SignIn(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.AuthSvc/SignIn',
            auth__pb2.SignInReq.SerializeToString,
            auth__pb2.SignInRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
