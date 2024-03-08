#C16-74-n-python\backend\myproject\users\serializers.py
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model, authenticate
from .models import Professional, CustomUser
from django.db import transaction
from django.contrib.auth.hashers import make_password



UserModel = get_user_model()
# json de prueba
"""" login superusuario
{
    "email": "test@test.com",
    "password": "test"
}
"""
class ProfessionalRegisterSerializer(serializers.ModelSerializer):
    # Define campos adicionales del usuario que deseas incluir en el serializador
    email = serializers.CharField(source='user.email')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    phone_number = serializers.CharField(source='user.phone_number')
    address = serializers.CharField(source='user.address')
    password = serializers.CharField(source='user.password')
    class Meta:
        model = Professional
        fields = ['professional_id', 'speciality', 'description', 'availability_hours', 'neighborhood', 'province', 'image',
                  'email', 'first_name', 'last_name', 'phone_number', 'address', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        # Crear una nueva instancia de CustomUser con los datos proporcionados
        user = CustomUser.objects.create(**user_data)
        # Establecer el rol como 'professional'
        user.role = 'professional'    
        user.set_password(user_data['password'])
        # Guardar el usuario
        user.save()
        # Crear una instancia de Professional asociada al usuario creado
        professional = Professional.objects.create(user=user, **validated_data)
    
        professional.save()
        return professional
    

class UserRegisterSerializer(serializers.ModelSerializer):
    role = serializers.CharField(default='user')  # Valor por defecto
    class Meta:
        model = UserModel
        fields = ('id','first_name', 'password', 'username', 'last_name', 'phone_number', 'address', 'email', 'role')
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

        # Agregar campos según el tipo de usuario
        if user.role == 'user':
            token['first_name'] = user.first_name
            token['last_name'] = user.last_name
            token['email'] = user.email
            token['username'] = user.username
            # Agregar otros campos de CustomUser si es necesario

        elif user.role == 'professional':
            token['first_name'] = user.first_name
            token['last_name'] = user.last_name
            token['email'] = user.email
            token['professional_id'] = user.professional.professional_id
            token['speciality'] = user.professional.speciality
            token['description'] = user.professional.description
            token['province'] = user.professional.province
            token['neighborhood'] = user.professional.neighborhood
            # Agregar otros campos de Professional si es necesario

        return token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('email', 'first_name', 'last_name', 'phone_number', 'address', 'role')

class ProfessionalSerializer(serializers.ModelSerializer):
    # Define campos adicionales del usuario que deseas incluir en el serializador
    email = serializers.CharField(source='user.email')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    phone_number = serializers.CharField(source='user.phone_number')
    address = serializers.CharField(source='user.address')
    # No incluyas el campo 'password' ya que se maneja por separado y no debe ser recuperado aquí
    class Meta:
        model = Professional
        fields = ['professional_id', 'speciality', 'description', 'availability_hours', 'neighborhood', 'province', 'image',
                  'email', 'first_name', 'last_name', 'phone_number', 'address']
    class Meta:
        model = Professional
        fields = '__all__'  # Incluye todos los campos de Professional
