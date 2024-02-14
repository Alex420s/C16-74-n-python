from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer
from rest_framework import permissions, status

from .validations import custom_validation, validate_nombre, validate_password

class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def post(self, request):
        clean_data = custom_validation(request.data)  # Assuming custom_validation is defined elsewhere
        serializer = UserRegisterSerializer(data=clean_data)
        
        if serializer.is_valid(raise_exception=True):
            response_data = serializer.save()
            return Response(response_data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		assert validate_nombre(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.validate(data)
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


# from django.shortcuts import render
# from django.http import JsonResponse
# from django.views.generic import ListView
# from rest_framework import status
# from .models import *


# def home(request):
#     return render(request, 'base.html')


# def obtener_todos_usuarios(request):
#     if request.method == 'GET':
#         try:
#             usuarios = User.objects.all()
#             datos_usuarios = [{'id': usuario.user_id, 'nombre': usuario.first_name, 'apellido': usuario.last_name,
#                                'correo': usuario.email, 'contraseña': usuario.password,
#                                'telefono': usuario.phone_number, 'direccion': usuario.address,
#                                'fecha': usuario.registration_date} for usuario in usuarios]
#             return JsonResponse({'usuarios': datos_usuarios}, status=status.HTTP_200_OK)
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#     else:
#         return JsonResponse({'error': 'Método no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
