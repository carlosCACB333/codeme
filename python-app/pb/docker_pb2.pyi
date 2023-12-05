from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class ExecuteCodeReq(_message.Message):
    __slots__ = ["code", "lang"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    LANG_FIELD_NUMBER: _ClassVar[int]
    code: str
    lang: str
    def __init__(self, code: _Optional[str] = ..., lang: _Optional[str] = ...) -> None: ...

class ExecuteCodeResp(_message.Message):
    __slots__ = ["output"]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    output: str
    def __init__(self, output: _Optional[str] = ...) -> None: ...
