#C16-74-n-python\backend\myproject\users\models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=255, default='CDMX')
    registration_date = models.DateTimeField(auto_now_add=True)
    role = models.CharField(max_length=20, choices=[('professional', 'Professional'), ('user', 'User')],)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'username','last_name', 'phone_number', 'address','role']

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.role}"
    
   
##
class Professional(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='professional')
    professional_id = models.AutoField(primary_key=True)
    speciality = models.CharField(max_length=100, default="Contador")
    description = models.TextField(max_length=100, default="Profesional de confianza")
    availability_hours = models.CharField(max_length=255, blank=True)
    neighborhood = models.CharField(max_length=100, blank=True, default="")
    province = models.CharField(max_length=100, blank=True, default="Buenos Aires")
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    image_url = models.CharField(max_length=255, blank=True)  # Nuevo campo para la URL de la imagen
    
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} - {self.speciality}"
  

@receiver(post_save, sender=CustomUser)
def create_professional(sender, instance, created, **kwargs):
    if created and instance.is_superuser and instance.role == 'professional':
        Professional.objects.create(user=instance)

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
