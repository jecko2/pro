from django.contrib.auth.models import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **other_fields):
        if not email:
            raise ValueError(_("Email Must Be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(_("Superuser must be set to is_staff=True"))
        if other_fields.get('is_superuser') is not True:
            raise ValueError(_("Superuser must be set to is_superuser=True"))

        return self.create_user(email, password, **other_fields)
