#C16-74-n-python\backend\myproject\users\views.pyp
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.db.models import Q
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserRegisterSerializer, UserSerializer, ProfessionalSerializer, ProfessionalRegisterSerializer, MyTokenObtainPairSerializer
from .models import Professional, CustomUser
from appointments.models import Availability
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

# Filtro de professional
class ProfessionalListView(APIView):
	permission_classes = (AllowAny,)
	def get(self, request):
		profesionales = Professional.objects.all()

		filtro_localidad = request.data

		filtro_localidad = request.query_params

		if filtro_localidad:
			try:
				neighborhood = filtro_localidad.get('neighborhood', None)
				province = filtro_localidad.get('province', None)
				speciality = filtro_localidad.get('speciality', None)

				if neighborhood:
					profesionales = profesionales.filter(neighborhood__icontains=neighborhood)
				if province:
					profesionales = profesionales.filter(province__icontains=province)
				if speciality:
					profesionales = profesionales.filter(speciality__icontains=speciality)
			except:
				pass  # Manejar la entrada no válida con elegancia

		serializer = ProfessionalSerializer(profesionales, many=True)
		return Response(serializer.data)


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

    def perform_create(self, serializer):
        image = self.request.data.get('image')  # Obtiene el archivo de imagen de los datos de la solicitud
        if image:
            # Guarda la imagen en el sistema de archivos y obtiene su ruta
            image_path = default_storage.save('user_images/' + image.name, ContentFile(image.read()))
            # Establece la ruta de la imagen en el serializer para que se guarde en la base de datos
            serializer.save(image=image_path)
        else:
            serializer.save()


class UserUpdateAPIView(APIView):
	permission_classes = (AllowAny,)

	def get(self, request):
		# Obtener el usuario actual
		user = request.user
		# Serializar el usuario
		serializer = UserSerializer(user)
		# Devolver la respuesta con los datos del usuario
		return Response(serializer.data)

	def put(self, request):
		# Obtener el usuario actual
		user = request.user
		# Serializar el usuario con los datos proporcionados en la solicitud
		serializer = UserSerializer(user, data=request.data)
		# Validar y guardar los datos actualizados del usuario
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def patch(self, request):
		# Obtener el usuario actual
		user = request.user
		# Serializar el usuario con los datos proporcionados en la solicitud
		serializer = UserSerializer(user, data=request.data, partial=True)
		# Validar y guardar los datos actualizados del usuario
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request):
		# Obtener el usuario actual
		user = request.user
		# Eliminar el usuario
		user.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)

# Devuelve todos los profesionales.
class ProfessionalView(APIView):       
	permission_classes = (IsAuthenticated,)
	def get(self, request):
		# Obtén el profesional actualmente autenticado
		professional = request.user.professional

		# Serializa los datos del profesional
		serializer = ProfessionalSerializer(professional)
			
		# Devuelve los datos serializados como respuesta
		return Response(serializer.data)

	def put(self, request):
		# Obtén el profesional actualmente autenticado
		professional = request.user.professional

		# Serializa los datos del profesional con los datos proporcionados en la solicitud
		serializer = ProfessionalSerializer(professional, data=request.data)

		# Valida y guarda los datos si son válidos
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		else:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)