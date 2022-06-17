from django import views
from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    path('', views.index_and_price, name='home'),
    path('assignment/', views.task_detail, name='order_detail'),
    path('paymenthandler/', views.paymenthandler, name='paymenthandler'),
]

