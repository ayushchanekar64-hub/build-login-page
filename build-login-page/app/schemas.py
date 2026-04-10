from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class UserRegister(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8)
    first_name: str
    last_name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    created_at: datetime

class ForgotPasswordRequest(BaseModel):
    email: EmailStr

class Token(BaseModel):
    access_token: str
    token_type: str