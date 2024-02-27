#C16-74-n-python\backend\myproject\users\views.py
from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, ProfessionalSerializer
from rest_framework import permissions, status
from .models import Professional
from appointments.models import Availability
from django.shortcuts import render


#### Render 
from django.shortcuts import render

def list_professionals(request):
    """
    Filtra y muestra una lista paginada de profesionales según la ciudad, provincia y país.

    Filtra por:
        - Localidad (ciudad, provincia, país)

    Devuelve una lista paginada de profesionales (20 por página por defecto) en la plantilla indicada.
    """

    profesionales = Professional.objects.all()

    # Filtrar por localidad (sin distinción de mayúsculas/minúsculas)
    filtro_localidad = request.GET.get("ciudad, provincia, país", False)
    if filtro_localidad:
        try:
            
            terminos_localidad = [termino.strip() for termino in filtro_localidad.split(',')]
            profesionales = profesionales.filter(ciudad__istartswith=terminos_localidad[0])
            if len(terminos_localidad) > 1:
                for termino in terminos_localidad[1:]:
                    profesionales = profesionales.filter(provincia__istartswith=termino) | profesionales.filter(país__istartswith=termino)
        except:
            pass  # Manejar la entrada no válida con elegancia (por ejemplo, mostrar un mensaje de error)

    
    pagina = request.GET.get('pagina', 1)
    paginador = profesionales.order_by('city').distinct('city')  
    p20 = paginador.page(pagina)

    contexto = {
        'profesionales': p20,
        'f_localidad': filtro_localidad if filtro_localidad else '',
    }

    return render(request, 'professional.html', contexto)



def view_professional_profile(request, professional_id):
    try:
        # Obtener el profesional basado en su ID
        professional = Professional.objects.get(pk=professional_id)
        # Obtener las horas disponibles asociadas a ese profesional
        availabilities = Availability.objects.filter(professional_id=professional_id)
	
    except Professional.DoesNotExist:
        # Manejo de error si el profesional no existe
        return render(request, 'error.html', {'message': 'El profesional no existe.'})

    # Renderizar la plantilla 'perfil_professional.html' con el contexto del profesional y las horas disponibles
    return render(request, 'perfil_professional.html', {'professional': professional, 'availabilities': availabilities})


### API

# Registrarse
class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		serializer = UserRegisterSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.save()
			message = f"Usuario creado exitosamente con el rol de: {user.get_role_display()}"
			return Response({"message": message, "user": serializer.data}, status=status.HTTP_201_CREATED)
		return Response(serializer.errors,{"message": serializer.data}, status=status.HTTP_400_BAD_REQUEST)
	
# Loguearse
class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		# Validador para el email de usuario
		if 'email' not in data or not data['email']:
			return Response({'error': 'El email de usuario es obligatorio'}, status=status.HTTP_400_BAD_REQUEST)
		
		# Validador para la contraseña
		if 'password' not in data or not data['password']:
			return Response({'error': 'La contraseña es obligatoria'}, status=status.HTTP_400_BAD_REQUEST)
		
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.validated_data
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)

# Cerrar Sesión
class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)

# Devuelve la info del usuario.
class UserView(APIView):          
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)

# Devuelve todos los profesionales.
class ProfessionalView(APIView):       
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        profesionales = Professional.objects.all()
        serializer = ProfessionalSerializer(profesionales, many=True)
        return Response(serializer.data)
	
