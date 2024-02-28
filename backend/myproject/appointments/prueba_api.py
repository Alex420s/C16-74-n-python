import requests

# URL de tu endpoint de la API
url = 'http://127.0.0.1:8000/appointments/availability/'

# Datos en formato JSON para crear un registro de disponibilidad
data = {
    "professional_id": 1,
    "speciality_availability": "Contador",
    "day_of_week": "Lunes",
    "start_time": "08:00:00",
    "end_time": "12:00:00",
    "max_users": 5,
    "status": True,
    "price": "1500.00"
}

# Archivo de imagen a cargar
files = {'image': open('C16-74-n-python/frontend/src/images/Facebook.png', 'rb')}

# Realizar la solicitud POST con los datos JSON y el archivo de imagen
response = requests.post(url, data=data, files=files)

# Comprobar el resultado de la solicitud
if response.status_code == 201:
    print("Registro de disponibilidad creado exitosamente.")
    print("Datos de la disponibilidad creada:", response.json())
else:
    print("Error al crear el registro de disponibilidad.")
    print("Código de estado:", response.status_code)
    print("Mensaje de error:", response.text)

