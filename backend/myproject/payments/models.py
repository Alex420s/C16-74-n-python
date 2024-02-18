#C16-74-n-python\backend\myproject\payments\models.py
from django.db import models



class Payment(models.Model):
    from appointments.models import Turn

    payment_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=100)
    date_and_time_of_payment = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment {self.payment_id}"