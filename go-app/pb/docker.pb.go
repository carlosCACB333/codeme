// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v3.21.12
// source: docker.proto

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

type ExecuteCodeReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code string `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Lang string `protobuf:"bytes,2,opt,name=lang,proto3" json:"lang,omitempty"`
}

func (x *ExecuteCodeReq) Reset() {
	*x = ExecuteCodeReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_docker_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExecuteCodeReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExecuteCodeReq) ProtoMessage() {}

func (x *ExecuteCodeReq) ProtoReflect() protoreflect.Message {
	mi := &file_docker_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExecuteCodeReq.ProtoReflect.Descriptor instead.
func (*ExecuteCodeReq) Descriptor() ([]byte, []int) {
	return file_docker_proto_rawDescGZIP(), []int{0}
}

func (x *ExecuteCodeReq) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *ExecuteCodeReq) GetLang() string {
	if x != nil {
		return x.Lang
	}
	return ""
}

type ExecuteCodeResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status STATUS `protobuf:"varint,1,opt,name=status,proto3,enum=pb.STATUS" json:"status,omitempty"`
	Output string `protobuf:"bytes,2,opt,name=output,proto3" json:"output,omitempty"`
}

func (x *ExecuteCodeResp) Reset() {
	*x = ExecuteCodeResp{}
	if protoimpl.UnsafeEnabled {
		mi := &file_docker_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExecuteCodeResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExecuteCodeResp) ProtoMessage() {}

func (x *ExecuteCodeResp) ProtoReflect() protoreflect.Message {
	mi := &file_docker_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExecuteCodeResp.ProtoReflect.Descriptor instead.
func (*ExecuteCodeResp) Descriptor() ([]byte, []int) {
	return file_docker_proto_rawDescGZIP(), []int{1}
}

func (x *ExecuteCodeResp) GetStatus() STATUS {
	if x != nil {
		return x.Status
	}
	return STATUS_OK
}

func (x *ExecuteCodeResp) GetOutput() string {
	if x != nil {
		return x.Output
	}
	return ""
}

var File_docker_proto protoreflect.FileDescriptor

var file_docker_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x64, 0x6f, 0x63, 0x6b, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x02,
	0x70, 0x62, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x38, 0x0a, 0x0e, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x52,
	0x65, 0x71, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x61, 0x6e, 0x67, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x61, 0x6e, 0x67, 0x22, 0x4d, 0x0a, 0x0f, 0x45, 0x78,
	0x65, 0x63, 0x75, 0x74, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x73, 0x70, 0x12, 0x22, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0a, 0x2e,
	0x70, 0x62, 0x2e, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x32, 0x47, 0x0a, 0x09, 0x44, 0x6f, 0x63,
	0x6b, 0x65, 0x72, 0x53, 0x76, 0x63, 0x12, 0x3a, 0x0a, 0x0b, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74,
	0x65, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x12, 0x2e, 0x70, 0x62, 0x2e, 0x45, 0x78, 0x65, 0x63, 0x75,
	0x74, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x13, 0x2e, 0x70, 0x62, 0x2e, 0x45,
	0x78, 0x65, 0x63, 0x75, 0x74, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x73, 0x70, 0x22, 0x00,
	0x30, 0x01, 0x42, 0x27, 0x5a, 0x25, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x63, 0x61, 0x72, 0x6c, 0x6f, 0x73, 0x63, 0x61, 0x63, 0x62, 0x33, 0x33, 0x33, 0x2f, 0x63,
	0x6f, 0x64, 0x65, 0x6d, 0x65, 0x2d, 0x67, 0x6f, 0x2f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_docker_proto_rawDescOnce sync.Once
	file_docker_proto_rawDescData = file_docker_proto_rawDesc
)

func file_docker_proto_rawDescGZIP() []byte {
	file_docker_proto_rawDescOnce.Do(func() {
		file_docker_proto_rawDescData = protoimpl.X.CompressGZIP(file_docker_proto_rawDescData)
	})
	return file_docker_proto_rawDescData
}

var file_docker_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_docker_proto_goTypes = []interface{}{
	(*ExecuteCodeReq)(nil),  // 0: pb.ExecuteCodeReq
	(*ExecuteCodeResp)(nil), // 1: pb.ExecuteCodeResp
	(STATUS)(0),             // 2: pb.STATUS
}
var file_docker_proto_depIdxs = []int32{
	2, // 0: pb.ExecuteCodeResp.status:type_name -> pb.STATUS
	0, // 1: pb.DockerSvc.ExecuteCode:input_type -> pb.ExecuteCodeReq
	1, // 2: pb.DockerSvc.ExecuteCode:output_type -> pb.ExecuteCodeResp
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_docker_proto_init() }
func file_docker_proto_init() {
	if File_docker_proto != nil {
		return
	}
	file_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_docker_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExecuteCodeReq); i {
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
		file_docker_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExecuteCodeResp); i {
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
			RawDescriptor: file_docker_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_docker_proto_goTypes,
		DependencyIndexes: file_docker_proto_depIdxs,
		MessageInfos:      file_docker_proto_msgTypes,
	}.Build()
	File_docker_proto = out.File
	file_docker_proto_rawDesc = nil
	file_docker_proto_goTypes = nil
	file_docker_proto_depIdxs = nil
}
