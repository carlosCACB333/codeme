// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: docker.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	DockerSvc_ExecuteCode_FullMethodName = "/pb.DockerSvc/ExecuteCode"
)

// DockerSvcClient is the client API for DockerSvc service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DockerSvcClient interface {
	ExecuteCode(ctx context.Context, in *ExecuteCodeReq, opts ...grpc.CallOption) (DockerSvc_ExecuteCodeClient, error)
}

type dockerSvcClient struct {
	cc grpc.ClientConnInterface
}

func NewDockerSvcClient(cc grpc.ClientConnInterface) DockerSvcClient {
	return &dockerSvcClient{cc}
}

func (c *dockerSvcClient) ExecuteCode(ctx context.Context, in *ExecuteCodeReq, opts ...grpc.CallOption) (DockerSvc_ExecuteCodeClient, error) {
	stream, err := c.cc.NewStream(ctx, &DockerSvc_ServiceDesc.Streams[0], DockerSvc_ExecuteCode_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &dockerSvcExecuteCodeClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type DockerSvc_ExecuteCodeClient interface {
	Recv() (*ExecuteCodeResp, error)
	grpc.ClientStream
}

type dockerSvcExecuteCodeClient struct {
	grpc.ClientStream
}

func (x *dockerSvcExecuteCodeClient) Recv() (*ExecuteCodeResp, error) {
	m := new(ExecuteCodeResp)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// DockerSvcServer is the server API for DockerSvc service.
// All implementations must embed UnimplementedDockerSvcServer
// for forward compatibility
type DockerSvcServer interface {
	ExecuteCode(*ExecuteCodeReq, DockerSvc_ExecuteCodeServer) error
	mustEmbedUnimplementedDockerSvcServer()
}

// UnimplementedDockerSvcServer must be embedded to have forward compatible implementations.
type UnimplementedDockerSvcServer struct {
}

func (UnimplementedDockerSvcServer) ExecuteCode(*ExecuteCodeReq, DockerSvc_ExecuteCodeServer) error {
	return status.Errorf(codes.Unimplemented, "method ExecuteCode not implemented")
}
func (UnimplementedDockerSvcServer) mustEmbedUnimplementedDockerSvcServer() {}

// UnsafeDockerSvcServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DockerSvcServer will
// result in compilation errors.
type UnsafeDockerSvcServer interface {
	mustEmbedUnimplementedDockerSvcServer()
}

func RegisterDockerSvcServer(s grpc.ServiceRegistrar, srv DockerSvcServer) {
	s.RegisterService(&DockerSvc_ServiceDesc, srv)
}

func _DockerSvc_ExecuteCode_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(ExecuteCodeReq)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(DockerSvcServer).ExecuteCode(m, &dockerSvcExecuteCodeServer{stream})
}

type DockerSvc_ExecuteCodeServer interface {
	Send(*ExecuteCodeResp) error
	grpc.ServerStream
}

type dockerSvcExecuteCodeServer struct {
	grpc.ServerStream
}

func (x *dockerSvcExecuteCodeServer) Send(m *ExecuteCodeResp) error {
	return x.ServerStream.SendMsg(m)
}

// DockerSvc_ServiceDesc is the grpc.ServiceDesc for DockerSvc service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DockerSvc_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.DockerSvc",
	HandlerType: (*DockerSvcServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ExecuteCode",
			Handler:       _DockerSvc_ExecuteCode_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "docker.proto",
}
