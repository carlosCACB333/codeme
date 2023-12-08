from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar

DESCRIPTOR: _descriptor.FileDescriptor

class STATUS(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    OK: _ClassVar[STATUS]
    ERROR: _ClassVar[STATUS]
OK: STATUS
ERROR: STATUS

class Empty(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...
