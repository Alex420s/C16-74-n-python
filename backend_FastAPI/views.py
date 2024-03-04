from models import AvailabilityCreate, TurnCreate
from fastapi import APIRouter

router = APIRouter()

# Operaciones CRUD para disponibilidades
def create_availability(availability: AvailabilityCreate, availabilities_db):
    availability_dict = availability.dict()
    availability_dict["availability_id"] = len(availabilities_db) + 1
    availabilities_db.append(availability_dict)
    return availability_dict

def get_availability(availability_id: int, availabilities_db):
    for availability in availabilities_db:
        if availability["availability_id"] == availability_id:
            return availability
    return None

# Operaciones CRUD para turnos
def create_turn(turn: TurnCreate, turns_db):
    turn_dict = turn.dict()
    turn_dict["turn_id"] = len(turns_db) + 1
    turns_db.append(turn_dict)
    return turn_dict

def get_turn(turn_id: int, turns_db):
    for turn in turns_db:
        if turn["turn_id"] == turn_id:
            return turn
    return None
