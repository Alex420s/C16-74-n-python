import requests

# URL de la API Flask
base_url = 'http://localhost:5000'

# ID del turno que deseas reservar
turno_id = 1

# Ruta para inscribirse en un turno
endpoint = '/inscribir-turno'

# Datos de la solicitud (usuario_id y turno_id)
data = {
    'user_id': 1,  # Reemplaza 1 con el ID del usuario que realizará la reserva
    'turn_id': turno_id
}

# Realizar la solicitud POST a la API
response = requests.post(base_url + endpoint, json=data)

# Verificar si la solicitud fue exitosa (código de estado 200)
if response.status_code == 200:
    # Imprimir el mensaje de confirmación de la reserva
    print("Reserva realizada exitosamente.")
else:
    # Imprimir el mensaje de error si la solicitud no fue exitosa
    print("Error al realizar la reserva:", response.text)
