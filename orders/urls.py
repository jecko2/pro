from django.urls import path
from . import views

app_name = 'order'
urlpatterns = [
    path('payment_process/', views.make_payment, name='make_payment'),
]
