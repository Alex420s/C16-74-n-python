from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('users.urls')),  # URL de la aplicación users
    path('appointments/', include('appointments.urls')),  # URL de la aplicación appointments
    path('payments/', include('payments.urls')),  # URL de la aplicación payments
]
