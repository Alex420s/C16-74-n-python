#C16-74-n-python\backend\myproject\payments\urls
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_payment, name='create_payment'),
    # Otras URLs de payments
]
