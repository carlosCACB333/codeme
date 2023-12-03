from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Status(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    OK: _ClassVar[Status]
    ERROR: _ClassVar[Status]
OK: Status
ERROR: Status

class Empty(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GenericRes(_message.Message):
    __slots__ = ["status", "message", "value"]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    status: Status
    message: str
    value: str
    def __init__(self, status: _Optional[_Union[Status, str]] = ..., message: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class GenericReq(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...
