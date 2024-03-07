# from app import db, app
#
#
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     first_name = db.Column(db.String(50), nullable=False)
#     last_name = db.Column(db.String(50), nullable=False)
#     username = db.Column(db.String(50), unique=True, nullable=False)
#     email = db.Column(db.String(100), unique=True, nullable=False)
#     password = db.Column(db.String(100), nullable=False)
#     phone_number = db.Column(db.String(20))
#     address = db.Column(db.String(100))
#     photo = db.Column(db.String(100))
#     role = db.Column(db.String(50), nullable=False)
#     turn_id = db.relationship('Turn', backref='user', lazy=True)
#
#
# class Professional(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     first_name = db.Column(db.String(50), nullable=False)
#     last_name = db.Column(db.String(50), nullable=False)
#     username = db.Column(db.String(50), unique=True, nullable=False)
#     email = db.Column(db.String(100), unique=True, nullable=False)
#     password = db.Column(db.String(100), nullable=False)
#     phone_number = db.Column(db.String(20))
#     speciality = db.Column(db.String(100), nullable=False)
#     description = db.Column(db.Text)
#     photo = db.Column(db.String(100))
#     role = db.Column(db.String(50), nullable=False)
#     turns = db.relationship('Turn', backref='professional', lazy=True)
#
#
# class Turn(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     category = db.Column(db.String(50), nullable=False)
#     city = db.Column(db.String(100), nullable=False)
#     address = db.Column(db.String(255), nullable=False)
#     date = db.Column(db.Date, nullable=False)
#     time = db.Column(db.Time, nullable=False)
#     cost = db.Column(db.Float, nullable=False)
#     capacity = db.Column(db.Integer, nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     professional_id = db.Column(db.Integer, db.ForeignKey('professional.id'), nullable=False)
#
#
# with app.app_context():
#     db.create_all()
