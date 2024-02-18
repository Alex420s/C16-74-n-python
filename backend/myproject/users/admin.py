"""#C16-74-n-python\backend\myproject\users\admin.py
from django.contrib import admin
from django.urls import path, include
from .models import *
from appointments.models import Availability
from payments.models import Payment

admin.site.register(CustomUser)
admin.site.register(Turn)
admin.site.register(Availability)
admin.site.register(Professional)
admin.site.register(Message)
admin.site.register(Payment)
admin.site.register(Rating)
admin.site.register(AppointmentHistory)
"""