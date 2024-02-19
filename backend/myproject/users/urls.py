#C16-74-n-python\backend\myproject\users\urls.py
from django.urls import path
from . import views
# from .views import home, obtener_todos_usuarios

urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
    path('login', views.UserLogin.as_view(), name='login'),
    path('logout', views.UserLogout.as_view(), name='logout'),
    path('user_profile', views.UserView.as_view(), name='user'),
    path('profile', views.ProfessionalView.as_view(), name="professional"),

    # path('professionals/', views.list_profesionales(), name='list_professionals'),
    path('professional/<int:professional_id>/', views.view_professional_profile, name='view_professional_profile'),

]
