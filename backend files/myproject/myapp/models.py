from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=255)  # Hashed password
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    registration_date = models.DateTimeField(auto_now_add=True)
    USER_TYPE_CHOICES = (
        ('professional', 'Professional'),
        ('user', 'User'),
    )
    role = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default="")

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.role}"


class Professional(models.Model):
    professional_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=100)
    description = models.TextField()
    session_rate = models.DecimalField(max_digits=10, decimal_places=2)
    availability_hours = models.CharField(max_length=255)
    USER_TYPE_CHOICES = (
        ('professional', 'Professional'),
        ('user', 'User'),
    )
    role = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default="")

    def __str__(self):
        return f"Professional: {self.user_id.first_name} {self.user_id.last_name}"

class Availability(models.Model):
    availability_id = models.AutoField(primary_key=True)
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE)
    day_of_week = models.CharField(max_length=10, choices=[("Lunes", "Lunes"), ("Martes", "Martes"), ("Miercoles", "Miercoles"),
                                                           ("Jueves", "Jueves"), ("Viernes", "Viernes"), ("Sabado", "Sabado"), ("Domingo", "Domingo")])
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f"{self.professional_id} - {self.day_of_week}: {self.start_time} - {self.end_time}"


class Turn(models.Model):
    turn_id = models.AutoField(primary_key=True)
    availability_id = models.ForeignKey(Availability, on_delete=models.CASCADE, default="")
    professional_id = models.ForeignKey(Professional, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date_and_time_of_turn = models.DateTimeField()
    turn_status = models.CharField(max_length=20, choices=[('confirmed', 'Confirmed'), ('pending', 'Pending'), ('cancelled', 'Cancelled'), ('completed', 'Completed')])
    message_to_professional = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Appointment {self.turn_id}"


class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=100)
    date_and_time_of_payment = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Payment {self.payment_id}"


class Rating(models.Model):
    rating_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    score = models.IntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])
    comment = models.TextField()
    rating_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Rating {self.rating_id}"


class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipient')
    message_content = models.TextField()
    date_and_time_of_message = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message {self.message_id}"


class AppointmentHistory(models.Model):
    history_id = models.AutoField(primary_key=True)
    turn_id = models.ForeignKey(Turn, on_delete=models.CASCADE)
    previous_status = models.CharField(max_length=20)
    current_status = models.CharField(max_length=20)
    date_and_time_of_status_change = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Appointment History {self.history_id}"
