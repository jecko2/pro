from django.contrib import admin
from .forms import CustomCreationForm, CustomChangeForm
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin


# Register your models here.


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    add_form = CustomCreationForm
    form = CustomChangeForm
    model = CustomUser
    list_display = ('email', 'is_active', 'date_joined',)
    list_filter = ('date_joined', 'is_staff')

    fieldsets = (
        (None, {'fields': ('email',)}),
        ('Permission', {'fields': ('is_staff', 'is_active')})
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')})
    )

    search_fields = ('email', )
    ordering = ('-date_joined', )
