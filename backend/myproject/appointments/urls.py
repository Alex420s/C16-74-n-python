#C16-74-n-python\backend\myproject\appointments\urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.AvailabilityAPIView.as_view(), name='appoinment'),
    path('turn/<int:professional_id>', views.TurnListView.as_view(), name='appoinment'),
    path('<int:professional_id>/', views.AvailabilityIdAPIView.as_view(), name='appoinment'),
    ]
