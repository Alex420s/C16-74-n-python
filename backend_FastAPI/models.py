from utils import BaseModel, time, datetime, Optional

class UserBase(BaseModel):
    email: str
    nick_name: str
    first_name: str
    last_name: str
    phone_number: str
    address: str
    role: str

class UserCreate(UserBase):
    password: str

class UserUpdate(UserBase):
    password: str = None

class User(UserBase):
    id: int
    registration_date: str
    is_active: bool
    is_staff: bool

class UserResponse(BaseModel):
    id: int
    token: str
    first_name: str
    role: str

class ProfessionalCreate(UserCreate):
    speciality: str = "Contador"
    description: str = "Profesional de confianza"
    availability_hours: str = ""
    neighborhood: str = ""
    province: str = "Buenos Aires"
    image: str = "default.jpg"

class Professional(User):
    professional_id: int
    speciality: str
    description: str
    availability_hours: str
    neighborhood: str
    province: str
    image: str

class AvailabilityBase(BaseModel):
    professional_id: int
    day_of_week: str
    start_time: time
    end_time: time
    status: bool

class AvailabilityCreate(AvailabilityBase):
    pass

class Availability(AvailabilityBase):
    availability_id: int

    class Config:
        orm_mode = True

class TurnBase(BaseModel):
    professional_id: int
    availability_id: int
    user_id: int
    date_and_time_of_turn: datetime
    start_time: time
    end_time: time
    turn_status: str
    message_to_professional: Optional[str]

class TurnCreate(TurnBase):
    pass

class Turn(TurnBase):
    turn_id: int

    class Config:
        orm_mode = True
