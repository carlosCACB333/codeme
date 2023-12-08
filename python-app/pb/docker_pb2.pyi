import common_pb2 as _common_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ExecuteCodeReq(_message.Message):
    __slots__ = ["code", "lang"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    LANG_FIELD_NUMBER: _ClassVar[int]
    code: str
    lang: str
    def __init__(self, code: _Optional[str] = ..., lang: _Optional[str] = ...) -> None: ...

class ExecuteCodeResp(_message.Message):
    __slots__ = ["status", "output"]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    status: _common_pb2.STATUS
    output: str
    def __init__(self, status: _Optional[_Union[_common_pb2.STATUS, str]] = ..., output: _Optional[str] = ...) -> None: ...
