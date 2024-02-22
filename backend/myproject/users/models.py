#C16-74-n-python\backend\myproject\users\models.py
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self,nick_name, email, first_name, last_name, phone_number, password=None, **extra_fields):
        if not email:
            raise ValueError('El campo email es obligatorio')
        if not first_name:
            raise ValueError('El campo first_name es obligatorio')
        if not last_name:
            raise ValueError('El campo last_name es obligatorio')
        if not phone_number:
            raise ValueError('El campo phone_number es obligatorio')
        if not nick_name:
            raise ValueError('El campo nick_name es obligatorio')
        email = self.normalize_email(email)
        user = self.model(email=email, nick_name=nick_name, first_name=first_name, last_name=last_name, phone_number=phone_number, **extra_fields)
        
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, nick_name, email, first_name, last_name, phone_number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser debe tener is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser debe tener is_superuser=True.')

        return self.create_user(email, nick_name, first_name, last_name, phone_number, password, **extra_fields)

# UserForm
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    nick_name = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    registration_date = models.DateTimeField(auto_now_add=True)
    role = models.CharField(max_length=20, choices=[('professional', 'Professional'), ('user', 'User')], default="user")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'nick_name','last_name', 'phone_number']

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.role}"
    
# Si el usuario define el rol 'profesional' 
# Se usara un signal para crear la tabla de profesional al guardar la tabla de usuario
class Professional(models.Model):
    professional_id = models.AutoField(primary_key=True)
    user_id = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    speciality = models.CharField(max_length=100, default="Contador")
    description = models.TextField(max_length=100, default="Profesional de confianza")
    session_rate = models.DecimalField(max_digits=10, decimal_places=2, default=250)
    availability_hours = models.CharField(max_length=255, blank=True)
    neighborhood = models.CharField(max_length=255, default='' )  
    province = models.CharField(max_length=255, default='')
    role = models.CharField(max_length=20, choices=[('professional', 'Professional'), ('user', 'User')])
    
    def __str__(self):
        return f"Professional: {self.user_id.first_name} {self.user_id.last_name}"



class Rating(models.Model):
    from appointments.models import Turn
    rating_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    score = models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])
    comment = models.TextField()
    rating_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Rating {self.rating_id}"


class Message(models.Model):
    from appointments.models import Turn

    message_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sender')
    recipient = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='recipient')
    message_content = models.TextField()
    date_and_time_of_message = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message {self.message_id}"


class AppointmentHistory(models.Model):
    from appointments.models import Turn

    history_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    previous_status = models.CharField(max_length=20)
    current_status = models.CharField(max_length=20)
    date_and_time_of_status_change = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Appointment History {self.history_id}"
