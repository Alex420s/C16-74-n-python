#C16-74-n-python\backend\myproject\payments\views.py
from django.http import HttpResponse, HttpResponseBadRequest
from .models import Payment  # Importar Payment desde el mismo directorio

import mercadopago
import json
from django.shortcuts import render, redirect
from appointments.models import Turn 
from django.utils import timezone


# Configuraciones de Mercado Pago
access_token = "TEST-304339383045061-022214-6cb87d070d3093f1220862bf76aa1bf9-505889493"
client_id = "505889493"


def create_preference(turn):
    # Lógica para crear la preferencia de pago en Mercado Pago utlizando la información del turno
    preference = mercadopago.preferences.create(
        items=[
            {
                "title": "Turno",
                "turn_id": turn.turn_id,
                "quantity": 1,
                "unit_price": turn.price,
            }
        ]
    )
    return preference


def process_payment(request, turn_id):
    """
    Crea una preferencia de pago y redirige al usuario a Mercado Pago.
    """
    # Obtener información del turno
    turn = Turn.objects.get(pk=turn_id)

    # Crear preferencia de pago
    preference_data = create_preference(turn)
    payment_url = preference_data["init_point"]

    return redirect(payment_url)


def success(request):
    """
    Procesa el pago exitoso y confirma el turno.
    """
    # Obtener el ID del pago
    payment_id = request.GET.get("payment_id")

    # Verificar el estado del pago
    payment_status = mercadopago.get_payment(payment_id)

    # Si el pago es exitoso:
    if payment_status["status"] == "approved":
        # Actualizar el estado del pago en tu sistema
        payment = Payment.objects.get(pk=payment_id)
        payment.payment_method = "Mercado Pago"
        payment.date_and_time_of_payment = timezone.now()
        payment.save()

        # Confirmar el turno
        turn = payment.turn
        turn.confirm_turn()

        # Mostrar un mensaje de éxito al usuario
        return render(request, "payments/success.html", {"message": "Pago exitoso"})

    # Si el pago no es exitoso:
    else:
        # Mostrar un mensaje de error al usuario
        return render(request, "payments/failure.html", {"message": "Pago fallido"})

def notification(request):
    """
    Procesa las notificaciones de Mercado Pago.
    """
    # Obtener la información de la notificación
    data = json.loads(request.body)

    # Verificar la autenticidad de la notificación
    if not mercadopago.verify_webhook(request.headers, data):
        return HttpResponseBadRequest()

    # Procesar la notificación
    payment_id = data["data"]["id"]
    payment_status = data["data"]["status"]

    # Actualizar el estado del pago en tu sistema
    payment = Payment.objects.get(pk=payment_id)
    payment.payment_method = "Mercado Pago"
    payment.date_and_time_of_payment = timezone.now()
    payment.save()

    # Si el pago es exitoso:
    if payment_status == "approved":
        # Confirmar el turno
        turn = payment.turn
        turn.confirm_turn()

    return HttpResponse(status=200)

