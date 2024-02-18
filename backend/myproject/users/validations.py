from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    nick_name = data['nick_name'].strip()
    password = data['password'].strip()
    ##
    if not nick_name or UserModel.objects.filter(nick_name=nick_name).exists():
        raise ValidationError('choose another nombre')
    ##
    if not password or len(password) < 8:
        raise ValidationError('choose another password, min 8 characters')
    ##

    return data


def validate_nombre(data):
    nombre = data['nick_name'].strip()
    if not nombre:
        raise ValidationError('a nick_name is needed')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('a password is needed')
    return True