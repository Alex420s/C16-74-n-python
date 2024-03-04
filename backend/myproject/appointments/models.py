#C16-74-n-python\backend\myproject\appointments\models.py
from django.db import models
from users.models import Professional, CustomUser

class Availability(models.Model):
    availability_id = models.AutoField(primary_key=True)
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name = 'professional')
    day_of_week = models.CharField(max_length=10, choices=[("Lunes", "Lunes"), ("Martes", "Martes"), ("Miercoles", "Miercoles"),
                                                   ("Jueves", "Jueves"), ("Viernes", "Viernes"), ("Sabado", "Sabado"), ("Domingo", "Domingo")])
    hour = models.TimeField()
    status = models.BooleanField(default=True)
    cupo = models.IntegerField(default=0)  # Campo de cupo
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=4200.0)  # Campo de precio
    fecha = models.DateField()  # Campo de fecha

    def __str__(self):
        return f"{self.professional_id} - {self.day_of_week}: {self.hour} - {self.cupo}"


class Turn(models.Model):
    turn_id = models.AutoField(primary_key=True)
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE ,  related_name='profesional')
    availability_id = models.ForeignKey(Availability, on_delete=models.CASCADE, related_name="availability")
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="user")
    date = models.DateTimeField()
    day_of_week = models.CharField(max_length=10, choices=[("Lunes", "Lunes"), ("Martes", "Martes"), ("Miercoles", "Miercoles"),
                                                   ("Jueves", "Jueves"), ("Viernes", "Viernes"), ("Sabado", "Sabado"), ("Domingo", "Domingo")])
    horario = models.TimeField()
    category = models.CharField(max_length=100, default="gym")
    repeat = models.BooleanField(default=False)
    TURN_STATUS_CHOICES = [
        ('confirmed', 'Confirmado'),
        ('pending', 'Pendiente'),
        ('cancelled', 'Cancelado'),
        ('completed', 'Completado'),
    ]
    turn_status = models.CharField(max_length=20, choices=TURN_STATUS_CHOICES, help_text="Estado del turno: Confirmado, Pendiente, Cancelado o Completado")
    message_to_professional = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Appointment {self.turn_id}"