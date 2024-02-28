# Generated by Django 4.2.6 on 2024-02-27 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0005_alter_turn_availability_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('digital', models.BooleanField(blank=True, default=False, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
        migrations.AddField(
            model_name='availability',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='avatares/'),
        ),
        migrations.AddField(
            model_name='availability',
            name='speciality_availability',
            field=models.CharField(default='Contador', max_length=100),
        ),
    ]
