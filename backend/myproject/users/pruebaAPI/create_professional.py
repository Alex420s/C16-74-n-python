import requests

# URL base de la API
base_url = 'https://127.0.0.1:8000/user/'

# Datos para crear un profesional
professional_data = {
    'email': 'profesionalapi@example.com',
    'first_name': 'profesionalapi',
    'nick_name': 'profesionalapi',
    'last_name': 'apeapi',
    'phone_number': '1234567890',
    'address': 'Direcciónprofesionalapi',
    'password': 'contraseñaapi',
    'role': 'professional',  # Especificamos que este usuario es un profesional
    'speciality': 'Especialidad del profesional',
    'description': 'Descripción del profesional',
}

# Hacer una solicitud para registrar un profesional
professional_url = base_url + 'profesional'
response = requests.post(professional_url, json=professional_data)

# Imprimir la respuesta
print('Respuesta del registro de profesional:')
print(response.status_code)  # Código de estado de la respuesta
print(response.json())  # Contenido de la respuesta en formato JSON
