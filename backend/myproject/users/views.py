#C16-74-n-python\backend\myproject\users\views.pyp
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, ProfessionalRegisterSerializer, MyTokenObtainPairSerializer
from .models import Professional, CustomUser
from appointments.models import Availability
from django.shortcuts import render
from rest_framework import generics

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
class MyTokenObtainPairView(TokenObtainPairView):
	serializer_class = MyTokenObtainPairSerializer
# Registrarse
class UserRegister(generics.CreateAPIView):
	permission_classes = (AllowAny,)
	queryset = CustomUser.objects.all()
	serializer_class = UserRegisterSerializer
class ProfessionalRegister(generics.CreateAPIView):
	permission_classes = (AllowAny,)
	queryset = Professional.objects.all()
	serializer_class = ProfessionalRegisterSerializer
# Loguearse
# class UserLogin(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	authentication_classes = [TokenAuthentication]
# 	##
# 	def post(self, request):
# 		data = request.data
# 		# Validador para el email de usuario
# 		if 'email' not in data or not data['email']:
# 			return Response({'error': 'El email de usuario es obligatorio'}, status=status.HTTP_400_BAD_REQUEST)
		
# 		# Validador para la contraseña
# 		if 'password' not in data or not data['password']:
# 			return Response({'error': 'La contraseña es obligatoria'}, status=status.HTTP_400_BAD_REQUEST)
		
		
# 		email = data['email']
# 		password = data['password']
# 				# Autenticar al usuario
# 		user = authenticate(request, email=email, password=password)
	
# 		if user:
# 			token, created = Token.objects.get_or_create(user=user)
# 			login(request, user)
# 			return Response({'token': token.key, "user": request.data})
		
# 		else:
# 			return Response({'error': 'Invalid credentials'}, status=401)
# # Cerrar Sesión
# class UserLogout(APIView):
# 	permission_classes = (permissions.AllowAny,)
# 	authentication_classes = ()
# 	def post(self, request):
# 		logout(request)
# 		return Response(status=status.HTTP_200_OK)

# # Devuelve la info del usuario.
# class UserView(APIView):          
# 	permission_classes = (permissions.IsAuthenticated,)
# 	authentication_classes = [TokenAuthentication]

# ##
# 	def get(self, request):
# 		serializer = UserSerializer(request.user)
# 		return Response({'user': serializer.data}, status=status.HTTP_200_OK)

# # Devuelve todos los profesionales.
# class ProfessionalView(APIView):       
# 	permission_classes = (permissions.IsAuthenticated,)
# 	authentication_classes = [TokenAuthentication]


# 	def get(self, request):
# 		profesionales = Professional.objects.all()
# 		serializer = ProfessionalSerializer(profesionales, many=True)
# 		return Response(serializer.data)
	
