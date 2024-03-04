from utils import get_availability,Availability,AvailabilityCreate,Turn,HTTPException,TurnCreate,User,UserCreate,get_turn
from main import app,database,List,UserUpdate

#Rutas para las operaciones CRUD de disponibilidades
@app.post("/availabilities/", response_model=Availability)
def create_availability(availability: AvailabilityCreate):
    return create_availability(availability)

@app.get("/availabilities/{availability_id}", response_model=Availability)
def read_availability(availability_id: int):
    availability = get_availability(availability_id)
    if availability is None:
        raise HTTPException(status_code=404, detail="Disponibilidad no encontrada")
    return availability

#Rutas para las operaciones CRUD de turnos
@app.post("/turns/", response_model=Turn)
def create_turn(turn: TurnCreate):
    return create_turn(turn)

@app.get("/turns/{turn_id}", response_model=Turn)
def read_turn(turn_id: int):
    turn = get_turn(turn_id)
    if turn is None:
        raise HTTPException(status_code=404, detail="Turno no encontrado")
    return turn

#Operaciones CRUD
@app.post("/users/", response_model=User)
def create_user(user: UserCreate):
    # Aquí agregarías la lógica para crear un usuario en la base de datos
    # Por ahora, solo simulamos agregando el usuario a la lista de la base de datos
    user_dict = user.dict()
    user_dict["id"] = len(database) + 1
    user_dict["registration_date"] = "2024-03-02"  # Obtén la fecha actual
    user_dict["is_active"] = True
    user_dict["is_staff"] = False
    database.append(user_dict)
    return user_dict
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

#Ruta para obtener todos los usuarios (solo para propósitos de demostración)
@app.get("/users/", response_model=List[User])
def get_users():
    return database