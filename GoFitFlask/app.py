from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from PIL import Image
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import LargeBinary
import base64
from datetime import datetime
# from models import *


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///goFitDB.db'
app.config['JWT_SECRET_KEY'] = 'secret_key'
db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app, origins=['*'])


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(20))
    address = db.Column(db.String(100))
    photo = db.Column(db.String(100))
    role = db.Column(db.String(50), nullable=False)
    turn_id = db.relationship('Turn', backref='user', lazy=True)


class Professional(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(20))
    description = db.Column(db.Text)
    photo = db.Column(LargeBinary)
    role = db.Column(db.String(50), nullable=False)
    cbu = db.Column(db.String(50))
    bank = db.Column(db.String(50))
    turns = db.relationship('Turn', backref='professional', lazy=True)


class Turn(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(100))
    address = db.Column(db.String(255), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    professional_id = db.Column(db.Integer, db.ForeignKey('professional.id'), nullable=False)


with app.app_context():
    db.create_all()


@app.route('/')
def home():
    return "Holi"


@app.route('/registro-usuario', methods=['POST'])
def create_user():
    user_data = request.json
    try:
        first_name = user_data.get('first_name')
        username = user_data.get('username')
        last_name = user_data.get('last_name')
        phone_number = user_data.get('phone_number')
        address = user_data.get('address')
        email = user_data.get('email')
        password = user_data.get('password')
        hashed_password = generate_password_hash(password)
        new_user = User(
            first_name=first_name,
            last_name=last_name,
            username=username,
            phone_number=phone_number,
            address=address,
            email=email,
            password=hashed_password,
            role='user'
        )
        db.session.add(new_user)
        db.session.commit()
        access_token = create_access_token(identity=new_user.id)
        response_data = {
            "id": new_user.id,
            "first_name": new_user.first_name,
            "role": new_user.role,
            "access_token": access_token,
            "address": new_user.address
        }
        return jsonify(response_data), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Email address already in use'}), 400


@app.route('/registro-profesional', methods=['POST'])
def create_professional():
    professional_data = request.json
    try:
        first_name = professional_data.get('first_name')
        last_name = professional_data.get('last_name')
        username = professional_data.get('username')
        email = professional_data.get('email')
        password = professional_data.get('password')
        phone_number = professional_data.get('phone_number')
        description = professional_data.get('description')
        hashed_password = generate_password_hash(password)
        new_professional = Professional(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=hashed_password,
            phone_number=phone_number,
            description=description,
            role='professional'
        )
        db.session.add(new_professional)
        db.session.commit()
        access_token = create_access_token(identity=new_professional.id)
        response_data = {
            "id": new_professional.id,
            "first_name": new_professional.first_name,
            "role": new_professional.role,
            "access_token": access_token
        }
        return jsonify(response_data), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Email address already in use'}), 400


@app.route('/login', methods=['POST'])
def login():
    login_data = request.json
    username = login_data.get('username')
    password = login_data.get('password')
    professional = Professional.query.filter_by(username=username).first()
    if professional:
        if check_password_hash(professional.password, password):
            access_token = create_access_token(identity=professional.id)
            response_data = {
                "id": professional.id,
                "first_name": professional.first_name,
                "role": professional.role,
                "access_token": access_token
            }
            return jsonify(response_data), 200
    else:
        user = User.query.filter_by(username=username).first()
        if user:
            if check_password_hash(user.password, password):
                access_token = create_access_token(identity=user.id)
                response_data = {
                    "id": user.id,
                    "first_name": user.first_name,
                    "role": user.role,
                    "access_token": access_token
                }
                return jsonify(response_data), 200
    return jsonify({"message": "Invalid username or password"}), 401


@app.route('/editar-profesional/<int:id>', methods=['POST'])
def edit_professional(id):
    professional = Professional.query.get_or_404(id)
    data = request.form

    professional.first_name = data.get('first_name', professional.first_name)
    professional.last_name = data.get('last_name', professional.last_name)
    professional.email = data.get('email', professional.email)
    professional.description = data.get('description', professional.description)
    professional.cbu = data.get('cbu', professional.cbu)
    professional.bank = data.get('bank', professional.bank)

    if 'photo' in request.files:
        photo = request.files['photo']
        professional.photo = photo.read()
    db.session.commit()

    # Convert the photo to base64 for inclusion in JSON response
    if professional.photo:
        photo_base64 = base64.b64encode(professional.photo).decode('utf-8')
    else:
        photo_base64 = None

    response_data = {
        "first_name": professional.first_name,
        "photo": photo_base64
    }
    return jsonify(response_data), 200


@app.route('/crear-turno/<int:prof_id>', methods=['POST'])
def create_turn(prof_id):
    data = request.json
    print(data)
    category = data.get('category')
    date = datetime.strptime(data.get('date'), '%Y-%m-%d').date()
    time = datetime.strptime(data.get('time'), '%H:%M').time()
    address = data.get('address')
    cost = data.get('cost')
    capacity = data.get('capacity')
    professional_id = prof_id

    new_turn = Turn(
        category=category,
        address=address,
        date=date,
        time=time,
        cost=cost,
        capacity=capacity,
        professional_id=professional_id
    )
    db.session.add(new_turn)
    db.session.commit()
    return jsonify({'message': 'Turn created successfully'}), 201


@app.route('/inscribir-turno', methods=['POST'])
def enroll_turn():
    pass


@app.route('/buscar-turnos', methods=['GET'])
def search_turns():
    pass


@app.route('/turnos-profesional/<int:prof_id>', methods=['GET'])
def get_professional_turns(prof_id):
    turns = Turn.query.filter_by(professional_id=prof_id).all()
    turns_data = []
    for turn in turns:
        turn_data = {
            'category': turn.category,
            'date': turn.date.strftime('%Y-%m-%d'),
            'time': turn.time.strftime('%H:%M'),
            'address': turn.address,
            'cost': turn.cost,
            'capacity': turn.capacity
        }
        turns_data.append(turn_data)
    return jsonify(turns_data)


@app.route('/turnos_usuario/<int:user_id>', methods=['GET'])
def get_user_turns(user_id):
    pass


if __name__ == '__main__':
    app.run(debug=True)
