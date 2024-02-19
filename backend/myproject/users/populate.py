import random
from django.utils import timezone
from users.models import CustomUser, Professional, Rating, Message, AppointmentHistory
from payments.models import Payment
from appointments.models import Availability, Turn


def create_payments(num_payments=5):
    turns = Turn.objects.all()
    for _ in range(num_payments):
        # Randomly select turn for payment
        turn = random.choice(turns)

        # Generate sample payment data
        amount = random.randint(50, 200)
        payment_method = random.choice(['Credit Card', 'PayPal', 'Cash'])
        date_and_time_of_payment = timezone.now()

        # Create payment
        Payment.objects.create(
            turn_id=turn,
            amount=amount,
            payment_method=payment_method,
            date_and_time_of_payment=date_and_time_of_payment
        )


def create_availability(num_availabilities=5):
    professionals = Professional.objects.all()
    for _ in range(num_availabilities):
        # Randomly select professional for availability
        professional = random.choice(professionals)

        # Generate sample availability data
        day_of_week = random.choice(['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'])
        start_time = timezone.now().replace(hour=random.randint(8, 16), minute=0, second=0, microsecond=0)
        end_time = start_time + timezone.timedelta(hours=random.randint(1, 4))
        status = True

        # Create availability
        Availability.objects.create(
            professional_id=professional,
            day_of_week=day_of_week,
            start_time=start_time,
            end_time=end_time,
            status=status
        )


def create_turns(num_turns=5):
    professionals = Professional.objects.all()
    users = CustomUser.objects.filter(role='user')
    availabilities = Availability.objects.all()
    for _ in range(num_turns):
        # Randomly select professional, user, and availability for turn
        professional = random.choice(professionals)
        user = random.choice(users)
        availability = random.choice(availabilities)

        # Generate sample turn data
        date_and_time_of_turn = timezone.now() + timezone.timedelta(days=random.randint(1, 30))
        start_time = availability.start_time
        end_time = availability.end_time
        turn_status = random.choice(['confirmed', 'pending', 'cancelled', 'completed'])
        message_to_professional = f"Sample Message to Professional {random.randint(1, 100)}"

        # Create turn
        Turn.objects.create(
            professional_id=professional,
            user_id=user,
            availability_id=availability,
            date_and_time_of_turn=date_and_time_of_turn,
            start_time=start_time,
            end_time=end_time,
            turn_status=turn_status,
            message_to_professional=message_to_professional
        )


def populate_database():
    create_payments()
    create_availability()
    create_turns()


if __name__ == "__main__":
    populate_database()
