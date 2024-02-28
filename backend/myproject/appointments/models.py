#C16-74-n-python\backend\myproject\appointments\models.py
from django.db import models
from django.utils import timezone
from users.models import Professional, CustomUser
import mercadopago

class Product(models.Model):
	name = models.CharField(max_length=200)
	price = models.DecimalField(max_digits=10,decimal_places=2)
	digital = models.BooleanField(default=False,null=True, blank=True)
	image = models.ImageField(null=True, blank=True)


	def _str_(self):
		return self.name

	@property
	def imageURL(self):
		try:
			url = self.image.url
		except:
			url = ''
		return url



class Availability(models.Model):
    availability_id = models.AutoField(primary_key=True)
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE)
    speciality_availability = models.CharField(max_length=100, default="Contador")
    day_of_week = models.CharField(max_length=10, choices=[("Lunes", "Lunes"), ("Martes", "Martes"), ("Miércoles", "Miércoles"),
                                                    ("Jueves", "Jueves"), ("Viernes", "Viernes"), ("Sábado", "Sábado"), ("Domingo", "Domingo")])
    start_time = models.TimeField()
    end_time = models.TimeField()
    max_users = models.PositiveIntegerField(default=1, help_text="Cantidad máxima de usuarios permitidos para esta disponibilidad")
    status = models.BooleanField(default=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, help_text="Precio de la clase", default=1500)
    image = models.ImageField(upload_to='avatares/', null=True, blank=True)

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


    def generate_payment_link(self):
        mp = mercadopago.MP("TU_CLIENT_ID", "TU_CLIENT_SECRET")  # Reemplaza con tus credenciales de Mercado Pago

        preference = {
            "items": [
                {
                    "title": "Turno con profesional",
                    "quantity": 1,
                    "currency_id": "ARS",
                    "unit_price": float(self.price)
                }
            ],
            "payer": {
                "email": self.user_id.email  # Puedes cambiar esto según cómo tengas almacenado el email del usuario
            },
            "external_reference": str(self.turn_id),
            "back_urls": {
                "success": "templates/exito_reserva.html",
                "failure": "templates/error_reserva.html",
                "pending": "templates/pendiente_reserva.html"
            }
        }

        preference_result = mp.create_preference(preference)
        payment_link = preference_result['response']['sandbox_init_point']  # Cambia a 'init_point' para producción
        
        return payment_link