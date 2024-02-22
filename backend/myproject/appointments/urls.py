#C16-74-n-python\backend\myproject\appointments\urls.py
from django.urls import path
from . import views


urlpatterns = [
    path('create/', views.create_appointment, name='create_appointment'),
    path('', views.list_availabilities, name='list_availabilities'),  # URL para listar disponibilidades
    path('reserve/<int:availability_id>/', views.reserve_turn, name='reserve_turn'),  # URL para reservar un turno
    path('success/', views.success_reservation, name='success_reservation'),  # URL para la página de éxito de reserva
    path('error/', views.error_reservation, name='error_reservation'),  # URL para la página de error de reserva
]
