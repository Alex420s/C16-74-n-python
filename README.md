![Readme Logo](https://github.com/No-Country/C16-74-n-python/assets/142808592/0cc2ed40-2ab5-4348-b60b-92b52c1709e6)
# Plataforma de Turnos GoFit

Este repositorio contiene el código fuente de una plataforma de turnos para profesionales y usuarios finales. Aquí encontrarás tanto el backend desarrollado en Django como el frontend creado con React.

## Video
Link

## Propósito Principal
El objetivo central del proyecto consiste en facilitar la conexión entre profesionales independientes y clientes, mediante una aplicación que les posibilite interactuar en tiempo real, visualizar la disponibilidad de turnos y efectuar reservas de manera sencilla y eficiente. Nuestra meta fundamental es abordar la dificultad que muchos profesionales independientes enfrentan al intentar llegar a un público más amplio y permitir a los clientes encontrar con facilidad servicios personalizados que se ajusten a sus necesidades.

La inspiración detrás de este proyecto surgió a raíz de un caso compartido por un colega, donde profesionales con habilidades y talentos valiosos, pero sin acceso a grandes empresas o instituciones, encontraban obstáculos para llegar a potenciales clientes. Nuestro propósito es proporcionarles una plataforma que les permita alcanzar a este público de manera más directa y efectiva, superando las barreras previas.

## Beneficios

Nuestros usuarios podrán disfrutar de un proceso de reserva y pago, dinámico y conveniente. Además, tendrán acceso a información detallada sobre los profesionales disponibles y podrán calificar y valorar los servicios recibidos, lo que proporcionará una retroalimentación útil para otros usuarios y aumentará la visibilidad de los profesionales mejor valorados.

## Funcionalidades Destacadas

Nuestra plataforma, presenta características únicas diseñadas para mejorar la experiencia tanto de usuarios como de profesionales.

Búsqueda Personalizada: Facilitamos la búsqueda de profesionales mediante la opción de filtrar por ubicación geográfica o disciplina específica. Esto asegura una experiencia de búsqueda más personalizada y eficiente.

Disponibilidad en Tiempo Real: Visualiza la disponibilidad actualizada de profesionales en tiempo real y realiza reservas al instante. Este enfoque optimiza la gestión del tiempo y evita conflictos de agenda.

## Objetivos Específicos

Nos hemos fijado metas específicas que incluyen la expansión de la plataforma, garantizando su capacidad para crecer y adaptarse eficientemente a las necesidades de todos los profesionales. Buscamos simplificar el proceso de solicitud de turnos, pagos y atención, y nos comprometemos a mejorar continuamente la experiencia tanto para los profesionales como para los clientes.

## Diferenciación en el Mercado

Nuestra aplicación ofrece una plataforma única que conecta directamente a profesionales independientes con clientes. Proporciona un entorno amigable e intuitivo donde interactúan de forma autónoma según sus necesidades.

## Impacto Esperado

Esperamos que nuestro proyecto tenga un impacto significativo en la comunidad al simplificar el día a día tanto de los clientes como de los profesionales. Buscamos facilitar el acceso a servicios de calidad, al mismo tiempo que promovemos la economía colaborativa y el emprendimiento independiente.

## Desarrolladores

**Backend**  
Alexis Garita: https://www.linkedin.com/in/alexisgarita  
Braian Alonso: https://www.linkedin.com/in/braianalonso29  
Marcial Abad: https://www.linkedin.com/in/marcial  
Wilsconidel Yanez: https://www.linkedin.com/in/wius  

**Frontend**  
Lourdes Tobal: https://www.linkedin.com/in/lourdes-tobal  
Veronica Molinari: https://www.linkedin.com/in/veronica-molinari  
Wilsconidel Yanez: https://www.linkedin.com/in/wius  

**Testing y documentación**  
Gabriela Sastre: https://www.linkedin.com/in/gabriela-sastre-50a688ba  

**Project Manager**  
Braian Alonso: https://www.linkedin.com/in/braianalonso29  
Gabriela Sastre: https://www.linkedin.com/in/gabriela-sastre-50a688ba  

## Instrucciones para conocer y colaborar con nuestro código

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

¡Y eso es todo! Ahora estás listo para usar y contribuir a la plataforma de turnos GoFit. ¡Diviértete codificando!

