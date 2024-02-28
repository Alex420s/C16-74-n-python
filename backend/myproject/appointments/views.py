from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Availability, Turn
from django.http import HttpResponse
from django.urls import reverse
from django.http import HttpResponseRedirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import AvailabilitySerializer
from rest_framework import permissions, status






@login_required
def reserve_turn(request, availability_id):
    if request.method == 'POST':
        availability = Availability.objects.get(pk=availability_id)
        user = request.user

        # Verificar si el usuario es un profesional
        if user.role == 'professional':
            messages.error(request, 'Los profesionales no pueden reservar turnos.')
            return redirect('error_reservation')

        # Verificar si el usuario ya tiene un turno reservado para esta disponibilidad
        if user.turn_set.filter(availability_id=availability).exists():
            messages.error(request, 'Ya tienes un turno reservado para esta disponibilidad.')
            return redirect('error_reservation')

        # Verificar si hay espacio disponible para reservar
        if availability.max_users > availability.turn_set.count():
            # Calcular el precio del turno
            price = availability.price

            # Crear el turno
            turn = Turn.objects.create(
                professional_id=availability.professional_id,
                availability_id=availability,
                user_id=user,
                price=price
            )
            turn.save()

            # Redirigir al proceso de pago
            return HttpResponseRedirect(reverse('success_reservation', args=[turn.turn_id]))

        else:
            # No hay espacio disponible para reservar
            messages.error(request, 'Lo sentimos, no hay espacio disponible para este turno.')
            return redirect('error_reservation')

    else:
        availability = Availability.objects.get(pk=availability_id)
        return render(request, 'reservar_turno.html', {'availability': availability})


### API
    
# Crear Availability
class AvailabilityAPIView(APIView): 
    permission_classes = (permissions.AllowAny,)

    def post(self, request): 
        serializer = AvailabilitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



####
def list_availabilities(request):
    availabilities = Availability.objects.all()
#    availabilities = Availability.objects.get(availability_id=availability_id)
    return render(request, 'list_availabilities.html', {'availabilities': availabilities})

def create_appointment(request):
    return HttpResponse("Create appointment view")

def success_reservation(request):
    return render(request, 'exito_reserva.html')

def error_reservation(request):
    return render(request, 'error_reserva.html')

