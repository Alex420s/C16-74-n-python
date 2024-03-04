from fastapi.middleware.cors import CORSMiddleware
from utils import *
import secrets
from urls import router as urls_router

router.include_router(urls_router)

app = FastAPI()
# Agrega el enrutador al FastAPI


# Configurar middleware CORS
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
    # Generar un token ficticio utilizando el módulo secrets de Python
    token = secrets.token_urlsafe(32)  # Genera un token aleatorio seguro para URL con 32 bytes
    return token

# Base de datos simulada
database = []
availabilities_db = []
turns_db = []

# Ejecutar la aplicación
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
