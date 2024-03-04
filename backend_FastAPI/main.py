from .utils import *
from .models import *

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)


def generate_dummy_token(user_id: int) -> str:
    # Generate a dummy token using Python's secrets module
    token = secrets.token_urlsafe(32)  # Generates a URL-safe random token with 32 bytes
    return token


# Base de datos simulada
database = []
availabilities_db = []
turns_db = []


# Operaciones CRUD para disponibilidades
def create_availability(availability: AvailabilityCreate):
    availability_dict = availability.dict()
    availability_dict["availability_id"] = len(availabilities_db) + 1
    availabilities_db.append(availability_dict)
    return availability_dict


def get_availability(availability_id: int):
    for availability in availabilities_db:
        if availability["availability_id"] == availability_id:
            return availability
    return None


# Operaciones CRUD para turnos
def create_turn(turn: TurnCreate):
    turn_dict = turn.dict()
    turn_dict["turn_id"] = len(turns_db) + 1
    turns_db.append(turn_dict)
    return turn_dict


def get_turn(turn_id: int):
    for turn in turns_db:
        if turn["turn_id"] == turn_id:
            return turn
    return None


# Rutas para las operaciones CRUD de disponibilidades
@app.post("/availabilities/", response_model=Availability)
def create_availability(availability: AvailabilityCreate):
    return create_availability(availability)


@app.get("/availabilities/{availability_id}", response_model=Availability)
def read_availability(availability_id: int):
    availability = get_availability(availability_id)
    if availability is None:
        raise HTTPException(status_code=404, detail="Disponibilidad no encontrada")
    return availability


# Rutas para las operaciones CRUD de turnos
@app.post("/turns/", response_model=Turn)
def create_turn(turn: TurnCreate):
    return create_turn(turn)


@app.get("/turns/{turn_id}", response_model=Turn)
def read_turn(turn_id: int):
    turn = get_turn(turn_id)
    if turn is None:
        raise HTTPException(status_code=404, detail="Turno no encontrado")
    return turn


# Operaciones CRUD
@app.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate):
    # Here, you would add the logic to create a user in the database
    # For now, let's simulate adding the user to the database and generating some dummy data
    user_dict = user.dict()
    user_dict["id"] = len(database) + 1
    user_dict["registration_date"] = "2024-03-02"  # Get the current date
    user_dict["is_active"] = True
    user_dict["is_staff"] = False
    # For demonstration purposes, generate a dummy token and add it to the response
    user_dict["token"] = generate_dummy_token(user_dict["id"])
    # Return the user data with additional fields
    return UserResponse(**user_dict)

@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user: UserUpdate):
    # Aquí agregarías la lógica para actualizar un usuario en la base de datos
    # Por ahora, solo simulamos encontrando al usuario por su ID y actualizando sus campos
    if user_id <= 0 or user_id > len(database):
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    
    user_dict = database[user_id - 1]
    updated_user = user.dict(exclude_unset=True)
    for key, value in updated_user.items():
        if value is not None:
            user_dict[key] = value
    return user_dict


# Ruta para obtener todos los usuarios (solo para propósitos de demostración)
@app.get("/users/", response_model=List[User])
def get_users():
    return database


# Ejecutar la aplicación
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
