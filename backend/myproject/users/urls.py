#C16-74-n-python\backend\myproject\users\urls.py
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi



urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
    path('register-professional', views.ProfessionalRegister.as_view(), name='profesional'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user', views.UserUpdateAPIView.as_view(), name='user'),
    path('professional', views.ProfessionalView.as_view(), name="professional"),
    path('filter', views.ProfessionalListView.as_view(), name="filter"),
]
