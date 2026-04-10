from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field, EmailStr

class UserDB(BaseModel):
    email: EmailStr
    password_hash: str
    first_name: str
    last_name: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    last_login: Optional[datetime] = None

    class Config:
        populate_by_name = True