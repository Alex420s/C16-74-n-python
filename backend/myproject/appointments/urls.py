#C16-74-n-python\backend\myproject\appointments\urls.py
from django.urls import path
from .views import create_appointment, success_reservation, error_reservation, list_availabilities, reserve_turn



urlpatterns = [
    path('create/', create_appointment, name='create_appointment'),
    path('', list_availabilities, name='list_availabilities'),  # URL para listar disponibilidades
    path('reserve/<int:availability_id>/', reserve_turn, name='reserve_turn'),  # URL para reservar un turno
    path('success/', success_reservation, name='success_reservation'),  # URL para la página de éxito de reserva
    path('error/', error_reservation, name='error_reservation'),  # URL para la página de error de reserva
]
