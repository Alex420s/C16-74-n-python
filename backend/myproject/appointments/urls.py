#C16-74-n-python\backend\myproject\appointments\urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_appointment, name='create_appointment'),
    # Otras URLs de appointments
]
