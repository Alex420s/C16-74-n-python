from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer
from rest_framework import permissions, status



class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	
	def post(self, request):
		serializer = UserRegisterSerializer(data=request.data)
		
		if serializer.is_valid(raise_exception=True):
			user = serializer.save()
			message = f"Usuario creado exitosamente con el rol de: {user.get_role_display()}"
			return Response({"message": message, "user": serializer.data}, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)
