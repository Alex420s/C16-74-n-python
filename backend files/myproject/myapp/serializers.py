from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model, authenticate

UserModel = get_user_model()
# json de prueba
""""
{
    "first_name": "Jduan",
    "password": "12345678",
    "nick_name": "locos",
    "last_name": "Hernandez",
    "phone_number": "23443435353",
    "address": "San Bartolo",
    "email": "testeres@gmail.com",
    "role": "user"
}
"""
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('first_name', 'password', 'nick_name', 'last_name', 'phone_number', 'address', 'email', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Crear un usuario con los datos validados
        user = UserModel.objects.create_user(**validated_data)
        
        # Personalizar el mensaje de respuesta basado en el rol del usuario
        if user.role == 'professional':
            role = "profesional"
        else:
            role = "usuario"
        
        return {
            "message": f"Usuario creado exitosamente con el rol de: {role}",
            "user": user.nick_name
        }
# class UserLoginSerializer(serializers.Serializer):
#     nick_name = serializers.CharField()
#     password = serializers.CharField()

#     def validate(self, attrs):
#         nick_name = attrs.get('nick_name')
#         password = attrs.get('password')

#         if nick_name and password:
#             user = authenticate(request=self.context.get('request'), nick_name =nick_name, password=password)
#             if user:
#                 if not user.is_active:
#                     raise AuthenticationFailed('User account is disabled.')
#                 return user
#             else:
#                 raise AuthenticationFailed('Unable to log in with provided credentials.')
#         else:
#             raise AuthenticationFailed('Must include "email" and "password".')
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModel
#         fields = ('email', 'first_name', 'last_name', 'phone_number', 'address', 'role')