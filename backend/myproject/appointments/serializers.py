#AvailabilitySerializer.py
from rest_framework import serializers
from .models import Availability

class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Availability
        fields = '__all__'
