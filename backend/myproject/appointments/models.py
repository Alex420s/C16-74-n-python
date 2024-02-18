#C16-74-n-python\backend\myproject\appointments\models.py
from django.db import models

class Availability(models.Model):
    from users.models import Professional

    availability_id = models.AutoField(primary_key=True)
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE)
    day_of_week = models.CharField(max_length=10, choices=[("Lunes", "Lunes"), ("Martes", "Martes"), ("Miercoles", "Miercoles"),
                                                           ("Jueves", "Jueves"), ("Viernes", "Viernes"), ("Sabado", "Sabado"), ("Domingo", "Domingo")])
    start_time = models.TimeField()
    end_time = models.TimeField()
    status = models.BooleanField(default=True)
    def __str__(self):
        return f"{self.professional_id} - {self.day_of_week}: {self.start_time} - {self.end_time}"


class Turn(models.Model):
    from users.models import Professional, CustomUser

    turn_id = models.AutoField(primary_key=True)
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE)
    availability_id = models.ForeignKey(Availability, on_delete=models.CASCADE, default="")
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    date_and_time_of_turn = models.DateTimeField()
    start_time = models.TimeField()
    end_time = models.TimeField()
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
