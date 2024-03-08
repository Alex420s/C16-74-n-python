import random
from datetime import datetime, timedelta
from models import db, User, Professional, Turn
from werkzeug.security import generate_password_hash


def populate_database():
    hashed_password = generate_password_hash('123456789')
    for _ in range(10):

        user = User(
            first_name=f'fname{_}',
            last_name=f'lname{_}',
            username=f'user{_}',
            email=f'user{_}@example.com',
            password='password',
            phone_number=hashed_password,
            address=f'address{_}',
            role='user'
        )
        db.session.add(user)

    # Create professionals
    for _ in range(4):
        professional = Professional(
            first_name=f'Professionalfn{_}',
            last_name=f'Professionalln{_}',
            username=f'profusername{_}',
            email=f'pro{_}@example.com',
            password='password',
            phone_number='987654321',
            speciality='Specialty',
            description='Description',
            role='professional'
        )
        db.session.add(professional)

    # Create turns for each day of the week
    days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    start_date = datetime.now().date()
    for i, day in enumerate(days_of_week):
        turn_date = start_date + timedelta(days=i)
        turn = Turn(
            category='Category',
            city='City',
            address='Address',
            date=turn_date,
            time=datetime.strptime('09:00', '%H:%M').time(),
            cost=random.uniform(20, 100),
            capacity=random.randint(5, 20),
            professional_id=random.randint(1, 4)  # Assign a random professional ID
        )
        db.session.add(turn)

    # Commit changes to the database
    db.session.commit()


if __name__ == '__main__':
    populate_database()
