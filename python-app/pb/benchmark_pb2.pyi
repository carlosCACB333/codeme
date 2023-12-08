import common_pb2 as _common_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class BenchRes(_message.Message):
    __slots__ = ["status", "message"]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    status: _common_pb2.STATUS
    message: str
    def __init__(self, status: _Optional[_Union[_common_pb2.STATUS, str]] = ..., message: _Optional[str] = ...) -> None: ...

class BenchReq(_message.Message):
    __slots__ = ["len"]
    LEN_FIELD_NUMBER: _ClassVar[int]
    len: int
    def __init__(self, len: _Optional[int] = ...) -> None: ...
