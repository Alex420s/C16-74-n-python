from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Availability, Turn
from .serializers import AvailabilitySerializer, TurnSerializer
from rest_framework import generics
from users.models import Professional
from django.shortcuts import get_object_or_404

class AvailabilityAPIView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        availabilities = Availability.objects.all()
        serializer = AvailabilitySerializer(availabilities, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AvailabilitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            availability = Availability.objects.get(pk=pk)
        except Availability.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = AvailabilitySerializer(availability, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AvailabilityIdAPIView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = AvailabilitySerializer

    def get_queryset(self):
        # Obtener el ID del profesional desde la URL
        professional_id = self.kwargs['professional_id']
        
        # Filtrar los objetos de Availability por el ID del profesional
        return Availability.objects.filter(professional__professional_id=professional_id)

    def get(self, request, *args, **kwargs):
        # Obtener la consulta filtrada
        queryset = self.get_queryset()
        
        # Serializar los resultados
        serializer = self.serializer_class(queryset, many=True)
        
        # Retornar los datos serializados
        return Response(serializer.data)
    

class TurnListView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request, professional_id):
        # Definir los campos requeridos para la creación del turno
        required_fields = ['availability_id', 'date', 'horario','day' ]

        # Comprobar si todos los campos requeridos están presentes en la solicitud
        if all(field in request.data for field in required_fields):
            # Obtener el profesional asociado al ID proporcionado
            professional = get_object_or_404(Professional, pk=professional_id)

            # Asignar el profesional al dato del turno antes de serializar
            request.data['professional_id'] = professional.id

            # Serializar los datos del turno
            serializer = TurnSerializer(data=request.data)

            # Validar y guardar el turno si los datos son válidos
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            # Devolver un error si falta alguno de los campos requeridos
            return Response({'error': 'Se requieren todos los campos para crear un turno'}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, professional_id):
        # Obtener todos los turnos asociados al ID del profesional
        turns = Turn.objects.filter(professional_id=professional_id)

        # Serializar los turnos
        serializer = TurnSerializer(turns, many=True)

        # Devolver los turnos serializados
        return Response(serializer.data)