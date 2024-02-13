from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import ListView
from rest_framework import status
from .models import *


def home(request):
    return render(request, 'base.html')


def obtener_todos_usuarios(request):
    if request.method == 'GET':
        try:
            usuarios = User.objects.all()
            datos_usuarios = [{'id': usuario.user_id, 'nombre': usuario.first_name, 'apellido': usuario.last_name,
                               'correo': usuario.email, 'contraseña': usuario.password,
                               'telefono': usuario.phone_number, 'direccion': usuario.address,
                               'fecha': usuario.registration_date} for usuario in usuarios]
            return JsonResponse({'usuarios': datos_usuarios}, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
