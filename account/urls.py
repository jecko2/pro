from django.urls import path
from . import views
from django.contrib.auth.views import LoginView


app_name = 'account'
urlpatterns = [
    path('signup1/', views.SignUp.as_view(), name='signup'),
    path("login/", LoginView.as_view(), name="login"),
]
