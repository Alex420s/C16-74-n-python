# Plataforma de Turnos C16-74-n-python-

Este repositorio contiene el código fuente de una plataforma de turnos para profesionales y usuarios finales. Aquí encontrarás tanto el backend desarrollado en Django como el frontend creado con React.

## Instrucciones de Uso

### Backend (Django)

1. **Instalación de Dependencias:**

   Asegúrate de tener instalado Python en tu sistema. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   pip install -r requirements.txt
   ```

2. **Configuración del Entorno Virtual (Opcional):**

   Se recomienda utilizar un entorno virtual de Python para aislar las dependencias de este proyecto. Puedes crear uno con el siguiente comando:

   ```bash
   python -m venv nombre_del_entorno
   ```

   Luego, activa el entorno virtual:

   - En Windows:

     ```bash
     nombre_del_entorno\Scripts\activate
     ```

3. **Lanzamiento del Servidor:**

   En la terminal, navega al directorio que contiene el archivo `manage.py`:

   ```bash
   cd backend\myproject
   ```

   Y ejecuta el siguiente comando para iniciar el servidor de Django:

   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. **Instalación de Dependencias:**

   Asegúrate de tener Node.js instalado en tu sistema. Luego, dentro del directorio `frontend`, ejecuta el siguiente comando para instalar las dependencias de React:

   ```bash
   npm install
   ```

2. **Iniciar la Aplicación de React:**

   En la misma terminal, dentro del directorio `frontend`, ejecuta el siguiente comando para iniciar la aplicación de React:

   ```bash
   npm start
   ```

   Esto lanzará la aplicación en tu navegador web predeterminado.

3. **Acceso a la Aplicación:**

   Una vez que tanto el backend como el frontend estén en funcionamiento, podrás acceder a la plataforma de turnos a través de la URL proporcionada por la aplicación de React.

## Notas Adicionales

- Es recomendable abrir dos instancias de terminal: una para ejecutar el servidor de Django y otra para iniciar la aplicación de React.
- Asegúrate de tener las bases de datos configuradas y migradas correctamente según las necesidades de tu proyecto.
- Para más detalles sobre las rutas y funcionalidades proporcionadas por la API de Django, consulta las vistas definidas en el archivo `views.py`.
- Para modificar o agregar nuevas funcionalidades, revisa y modifica los archivos pertinentes tanto en el backend como en el frontend.

¡Y eso es todo! Ahora estás listo para usar y contribuir a la plataforma de turnos C16-74-n-python-. ¡Diviértete codificando!

