from django.contrib import admin
from django.urls import path, include
from .models import *

admin.site.register(User)
admin.site.register(Turn)
admin.site.register(Availability)
admin.site.register(Professional)
admin.site.register(Message)
admin.site.register(Payment)
admin.site.register(Rating)
admin.site.register(AppointmentHistory)
