import user_pb2 as _user_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SignUpReq(_message.Message):
    __slots__ = ["username", "firstName", "lastName", "email", "gender", "password", "picture", "phone"]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    FIRSTNAME_FIELD_NUMBER: _ClassVar[int]
    LASTNAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    GENDER_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    PICTURE_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    username: str
    firstName: str
    lastName: str
    email: str
    gender: str
    password: str
    picture: str
    phone: str
    def __init__(self, username: _Optional[str] = ..., firstName: _Optional[str] = ..., lastName: _Optional[str] = ..., email: _Optional[str] = ..., gender: _Optional[str] = ..., password: _Optional[str] = ..., picture: _Optional[str] = ..., phone: _Optional[str] = ...) -> None: ...

class SignUpRes(_message.Message):
    __slots__ = ["user", "token"]
    USER_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    user: _user_pb2.User
    token: str
    def __init__(self, user: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., token: _Optional[str] = ...) -> None: ...

class SignInReq(_message.Message):
    __slots__ = ["username", "password"]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    username: str
    password: str
    def __init__(self, username: _Optional[str] = ..., password: _Optional[str] = ...) -> None: ...

class SignInRes(_message.Message):
    __slots__ = ["user", "token"]
    USER_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    user: _user_pb2.User
    token: str
    def __init__(self, user: _Optional[_Union[_user_pb2.User, _Mapping]] = ..., token: _Optional[str] = ...) -> None: ...
