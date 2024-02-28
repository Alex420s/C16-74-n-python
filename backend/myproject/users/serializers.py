#C16-74-n-python\backend\myproject\users\serializers.py
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model, authenticate
from .models import Professional, CustomUser
from django.db import transaction
from django.contrib.auth.hashers import make_password


UserModel = get_user_model()
# json de prueba
"""" login
{
    "email": "test@test.com",
    "password": "test"
}
"""
class ProfessionalRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
        exclude = ['groups','customuser_ptr', 'role','user_permissions', 'registration_date', 'is_active', 'is_superuser', 'is_staff', 'availability_hours','last_login',]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['role'] = 'professional'  # Establece el rol como 'professional'
        professional = Professional.objects.create(**validated_data)
        professional.set_password(validated_data['password'])
        professional.save()
        return professional
    

class UserRegisterSerializer(serializers.ModelSerializer):
    role = serializers.CharField(default='user')  # Valor por defecto
    class Meta:
        model = UserModel
        fields = ('id','first_name', 'password', 'nick_name', 'last_name', 'phone_number', 'address', 'email', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Crear un usuario con los datos validados
        user = UserModel.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return  user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Añadir claims adicionales basados en el rol del usuario
        if user.role == 'user':  
            token['first_name'] = user.first_name
            token['last_name'] = user.last_name
            token['email'] = user.email
            token['nick_name'] = user.nick_name

        elif user.role == 'professional':
            token['first_name'] = user.first_name
            token['professional_id'] = user.professional.professional_id
            token['speciality'] = user.professional.speciality
            token['description'] = user.professional.description
            token['province'] = user.professional.province
            token['neighborhood'] = user.professional.neighborhood
        return token

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