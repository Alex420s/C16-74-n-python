from django.urls import path
from . import views
# from .views import home, obtener_todos_usuarios

urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
    path('login', views.UserLogin.as_view(), name='login'),
    path('logout', views.UserLogout.as_view(), name='logout'),
    path('user', views.UserView.as_view(), name='user'),
]
  
# path('api/usuarios', views.obtener_todos_usuarios),


