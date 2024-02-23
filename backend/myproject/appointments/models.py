#C16-74-n-python\backend\myproject\appointments\models.py
from django.db import models
from django.utils import timezone
from users.models import Professional, CustomUser

class Availability(models.Model):
    availability_id = models.AutoField(primary_key=True)
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE)
    day_of_week = models.CharField(max_length=10, choices=[("Lunes", "Lunes"), ("Martes", "Martes"), ("Miércoles", "Miércoles"),
                                                    ("Jueves", "Jueves"), ("Viernes", "Viernes"), ("Sábado", "Sábado"), ("Domingo", "Domingo")])
    start_time = models.TimeField()
    end_time = models.TimeField()
    max_users = models.PositiveIntegerField(default=1, help_text="Cantidad máxima de usuarios permitidos para esta disponibilidad")
    status = models.BooleanField(default=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Precio de la clase", default=1500)

    # Relación muchos a muchos con CustomUser para permitir que varios usuarios registren turnos para esta disponibilidad
    users = models.ManyToManyField(CustomUser, through='Turn')

    def _str_(self):
        return f"{self.professional_id} - {self.day_of_week}: {self.start_time} - {self.end_time}"

    def get_next_weekday(self, weekday):
        """
        Calcula la fecha del próximo día especificado en la semana (Lunes, Martes, etc.)
        """
        days_ahead = weekday - timezone.now().weekday()
        if days_ahead <= 0:  # si el día especificado ya pasó esta semana, obtenemos el día de la próxima semana
            days_ahead += 7
        return timezone.now() + timezone.timedelta(days=days_ahead)

class Turn(models.Model):
    turn_id = models.AutoField(primary_key=True)
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE, related_name='turns')
    availability_id = models.ForeignKey(Availability, on_delete=models.CASCADE, related_name='turns', default="")
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='turns')
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Precio del turno", default=1500)

    TURN_STATUS_CHOICES = [
        ('confirmed', 'Confirmado'),
        ('pending', 'Pendiente'),
        ('cancelled', 'Cancelado'),
        ('completed', 'Completado'),
    ]
    turn_status = models.CharField(max_length=20, choices=TURN_STATUS_CHOICES, default='pending', help_text="Estado del turno: Confirmado, Pendiente, Cancelado o Completado")
    message_to_professional = models.TextField(blank=True, null=True)

    def confirm_turn(self):
        """
        Confirma el turno.
        """
        self.turn_status = 'confirmed'
        self.save()

    def cancel_turn(self):
        """
        Cancela el turno.
        """
        self.turn_status = 'cancelled'
        self.save()

    def complete_turn(self):
        """
        Completa el turno.
        """
        self.turn_status = 'completed'
        self.save()

    def _str_(self):
        return f"Appointment {self.turn_id}"

