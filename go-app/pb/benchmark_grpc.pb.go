// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: benchmark.proto

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
	BenchMarkSvc_ExecuteBenchMark_FullMethodName = "/pb.BenchMarkSvc/ExecuteBenchMark"
)

// BenchMarkSvcClient is the client API for BenchMarkSvc service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BenchMarkSvcClient interface {
	ExecuteBenchMark(ctx context.Context, in *BenchReq, opts ...grpc.CallOption) (*BenchRes, error)
}

type benchMarkSvcClient struct {
	cc grpc.ClientConnInterface
}

func NewBenchMarkSvcClient(cc grpc.ClientConnInterface) BenchMarkSvcClient {
	return &benchMarkSvcClient{cc}
}

func (c *benchMarkSvcClient) ExecuteBenchMark(ctx context.Context, in *BenchReq, opts ...grpc.CallOption) (*BenchRes, error) {
	out := new(BenchRes)
	err := c.cc.Invoke(ctx, BenchMarkSvc_ExecuteBenchMark_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BenchMarkSvcServer is the server API for BenchMarkSvc service.
// All implementations must embed UnimplementedBenchMarkSvcServer
// for forward compatibility
type BenchMarkSvcServer interface {
	ExecuteBenchMark(context.Context, *BenchReq) (*BenchRes, error)
	mustEmbedUnimplementedBenchMarkSvcServer()
}

// UnimplementedBenchMarkSvcServer must be embedded to have forward compatible implementations.
type UnimplementedBenchMarkSvcServer struct {
}

func (UnimplementedBenchMarkSvcServer) ExecuteBenchMark(context.Context, *BenchReq) (*BenchRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExecuteBenchMark not implemented")
}
func (UnimplementedBenchMarkSvcServer) mustEmbedUnimplementedBenchMarkSvcServer() {}

// UnsafeBenchMarkSvcServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BenchMarkSvcServer will
// result in compilation errors.
type UnsafeBenchMarkSvcServer interface {
	mustEmbedUnimplementedBenchMarkSvcServer()
}

func RegisterBenchMarkSvcServer(s grpc.ServiceRegistrar, srv BenchMarkSvcServer) {
	s.RegisterService(&BenchMarkSvc_ServiceDesc, srv)
}

func _BenchMarkSvc_ExecuteBenchMark_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BenchReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BenchMarkSvcServer).ExecuteBenchMark(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BenchMarkSvc_ExecuteBenchMark_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BenchMarkSvcServer).ExecuteBenchMark(ctx, req.(*BenchReq))
	}
	return interceptor(ctx, in, info, handler)
}

// BenchMarkSvc_ServiceDesc is the grpc.ServiceDesc for BenchMarkSvc service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BenchMarkSvc_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.BenchMarkSvc",
	HandlerType: (*BenchMarkSvcServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ExecuteBenchMark",
			Handler:    _BenchMarkSvc_ExecuteBenchMark_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "benchmark.proto",
}
