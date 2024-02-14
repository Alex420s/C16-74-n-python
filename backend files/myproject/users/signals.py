from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import CustomUser, Professional

@receiver(post_save, sender=CustomUser)
def create_professional(sender, instance, created, **kwargs):
    if created and instance.role == 'professional':
        Professional.objects.create(user_id=instance)