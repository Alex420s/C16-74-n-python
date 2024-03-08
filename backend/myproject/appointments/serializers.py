from rest_framework import serializers
from .models import Availability, Turn
from users.models import Professional



class ProfessionalSerializer(serializers.ModelSerializer):
    email = serializers.CharField(source='user.email')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    class Meta:
        model = Professional
        fields = ['last_name','first_name', 'email',  'professional_id', 'speciality', 'description', 'neighborhood', 'province', 'image']

class AvailabilitySerializer(serializers.ModelSerializer):
    # Define un campo anidado para serializar los datos del profesional asociado
    professional = ProfessionalSerializer()
    class Meta:
        model = Availability
        fields = ['availability_id', 'professional', 'day_of_week', 'hour', 'status', 'cupo', 'precio', 'fecha']


class TurnSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Turn
        fields = '__all__'
