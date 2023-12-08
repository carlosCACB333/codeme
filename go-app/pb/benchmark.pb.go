// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v3.21.12
// source: benchmark.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type BenchRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status  STATUS `protobuf:"varint,1,opt,name=status,proto3,enum=pb.STATUS" json:"status,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *BenchRes) Reset() {
	*x = BenchRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_benchmark_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BenchRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BenchRes) ProtoMessage() {}

func (x *BenchRes) ProtoReflect() protoreflect.Message {
	mi := &file_benchmark_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BenchRes.ProtoReflect.Descriptor instead.
func (*BenchRes) Descriptor() ([]byte, []int) {
	return file_benchmark_proto_rawDescGZIP(), []int{0}
}

func (x *BenchRes) GetStatus() STATUS {
	if x != nil {
		return x.Status
	}
	return STATUS_OK
}

func (x *BenchRes) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

type BenchReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Len int64 `protobuf:"varint,1,opt,name=len,proto3" json:"len,omitempty"`
}

func (x *BenchReq) Reset() {
	*x = BenchReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_benchmark_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BenchReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BenchReq) ProtoMessage() {}

func (x *BenchReq) ProtoReflect() protoreflect.Message {
	mi := &file_benchmark_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BenchReq.ProtoReflect.Descriptor instead.
func (*BenchReq) Descriptor() ([]byte, []int) {
	return file_benchmark_proto_rawDescGZIP(), []int{1}
}

func (x *BenchReq) GetLen() int64 {
	if x != nil {
		return x.Len
	}
	return 0
}

var File_benchmark_proto protoreflect.FileDescriptor

var file_benchmark_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x02, 0x70, 0x62, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x48, 0x0a, 0x08, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x52, 0x65, 0x73, 0x12,
	0x22, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x0a, 0x2e, 0x70, 0x62, 0x2e, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x52, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x1c, 0x0a,
	0x08, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x52, 0x65, 0x71, 0x12, 0x10, 0x0a, 0x03, 0x6c, 0x65, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x03, 0x6c, 0x65, 0x6e, 0x32, 0x40, 0x0a, 0x0c, 0x42,
	0x65, 0x6e, 0x63, 0x68, 0x4d, 0x61, 0x72, 0x6b, 0x53, 0x76, 0x63, 0x12, 0x30, 0x0a, 0x10, 0x45,
	0x78, 0x65, 0x63, 0x75, 0x74, 0x65, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x4d, 0x61, 0x72, 0x6b, 0x12,
	0x0c, 0x2e, 0x70, 0x62, 0x2e, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x52, 0x65, 0x71, 0x1a, 0x0c, 0x2e,
	0x70, 0x62, 0x2e, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x52, 0x65, 0x73, 0x22, 0x00, 0x42, 0x27, 0x5a,
	0x25, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x61, 0x72, 0x6c,
	0x6f, 0x73, 0x63, 0x61, 0x63, 0x62, 0x33, 0x33, 0x33, 0x2f, 0x63, 0x6f, 0x64, 0x65, 0x6d, 0x65,
	0x2d, 0x67, 0x6f, 0x2f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_benchmark_proto_rawDescOnce sync.Once
	file_benchmark_proto_rawDescData = file_benchmark_proto_rawDesc
)

func file_benchmark_proto_rawDescGZIP() []byte {
	file_benchmark_proto_rawDescOnce.Do(func() {
		file_benchmark_proto_rawDescData = protoimpl.X.CompressGZIP(file_benchmark_proto_rawDescData)
	})
	return file_benchmark_proto_rawDescData
}

var file_benchmark_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_benchmark_proto_goTypes = []interface{}{
	(*BenchRes)(nil), // 0: pb.BenchRes
	(*BenchReq)(nil), // 1: pb.BenchReq
	(STATUS)(0),      // 2: pb.STATUS
}
var file_benchmark_proto_depIdxs = []int32{
	2, // 0: pb.BenchRes.status:type_name -> pb.STATUS
	1, // 1: pb.BenchMarkSvc.ExecuteBenchMark:input_type -> pb.BenchReq
	0, // 2: pb.BenchMarkSvc.ExecuteBenchMark:output_type -> pb.BenchRes
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_benchmark_proto_init() }
func file_benchmark_proto_init() {
	if File_benchmark_proto != nil {
		return
	}
	file_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_benchmark_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BenchRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_benchmark_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BenchReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_benchmark_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_benchmark_proto_goTypes,
		DependencyIndexes: file_benchmark_proto_depIdxs,
		MessageInfos:      file_benchmark_proto_msgTypes,
	}.Build()
	File_benchmark_proto = out.File
	file_benchmark_proto_rawDesc = nil
	file_benchmark_proto_goTypes = nil
	file_benchmark_proto_depIdxs = nil
}