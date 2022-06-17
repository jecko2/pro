from django.contrib import admin
from .models import CalculatePrice, Assignment



@admin.register(CalculatePrice)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['paper', 'level', 'pages', 'price']


@admin.register(Assignment)
class AssignmentAdmin(admin.ModelAdmin):
    list_display = ['service', 'subject', 'title', 'end_date']