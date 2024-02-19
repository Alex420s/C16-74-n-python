#C16-74-n-python\backend\myproject\users\serializers.py
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model, authenticate
from .models import Professional

UserModel = get_user_model()
# json de prueba
""""
{
    "first_name": "Jduan",
    
    "nick_name": "locos",
    "last_name": "Hernandez",
    "phone_number": "23443435353",
    "address": "San Bartolo",
    "email": "testeres@gmail.com",
    "password": "12345678",
    "role": "user"
}
"""
class UserRegisterSerializer(serializers.ModelSerializer):
    role = serializers.CharField(default='user')  # Valor por defecto
    class Meta:
        model = UserModel
        fields = ('first_name', 'password', 'nick_name', 'last_name', 'phone_number', 'address', 'email', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Crear un usuario con los datos validados
        user = UserModel.objects.create_user(**validated_data)
        return  user
        
class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'), email =email, password=password)
            if user:
                if not user.is_active:
                    raise AuthenticationFailed('User account is disabled.')
                return user
            else:
                raise AuthenticationFailed('Unable to log in with provided credentials.')
        else:
            raise AuthenticationFailed('Must include "email" and "password".')
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'first_name', 'last_name', 'phone_number', 'address', 'role')

class ProfessionalSerializer(serializers.ModelSerializer):
    user_id = UserSerializer()  # Usa el serializer de CustomUser

    class Meta:
        model = Professional
        fields = '__all__'  # Incluye todos los campos de Professional

# Devuelve un JSON de esta forma
"""
{
        "professional_id": 1,
        "user_id": {
            "email": "testere78s@gmail.com",
            "first_name": "Jd78uan",
            "last_name": "Hernandez",
            "phone_number": "23443435353",
            "address": "San Bartolo",
            "role": "professional"
        },
        "speciality": "Contador",
        "description": "Profesional de confianza",
        "session_rate": "250.00",
        "availability_hours": ""
},
"""