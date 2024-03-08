#C16-74-n-python\backend\myproject\users\urls.py
from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
# from .views import home, obtener_todos_usuarios

urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
    path('register-professional', views.ProfessionalRegister.as_view(), name='profesional'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Methodos puth, patch, get, delete
    path('user', views.UserUpdateAPIView.as_view(), name='user'),

    path('professional', views.ProfessionalView.as_view(), name="professional"),
    path('filter', views.ProfessionalListView.as_view(), name="filter")
    # path('professionals/', views.list_professionals, name='list_professionals'),
    # path('professional/<int:professional_id>/', views.view_professional_profile, name='view_professional_profile'),

]