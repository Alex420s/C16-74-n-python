import requests

# URL de la API Flask
base_url = 'http://localhost:5000'

# Ruta para obtener los turnos creados
endpoint = '/buscar-turnos'

# Parámetros de búsqueda (opcional)
params = {
    'address': 'Dirección de ejemplo',
    'category': 'Categoría de ejemplo'
}

# Realizar la solicitud GET a la API
response = requests.get(base_url + endpoint)

# Verificar si la solicitud fue exitosa (código de estado 200)
if response.status_code == 200:
    # Imprimir los datos de los turnos obtenidos
    turnos = response.json()
    print("Turnos encontrados:")
    for turno in turnos:
        print(turno)
else:
    # Imprimir el mensaje de error si la solicitud no fue exitosa
    print("Error al obtener los turnos:", response.text)
