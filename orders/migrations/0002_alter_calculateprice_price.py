# Generated by Django 4.0.5 on 2022-06-09 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calculateprice',
            name='price',
            field=models.PositiveIntegerField(default=1),
        ),
    ]
