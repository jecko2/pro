from asyncio.format_helpers import _format_callback
import email
from django.shortcuts import render, redirect, reverse
from django.urls import reverse_lazy
from .forms import CustomCreationForm
from django.views import generic
from django.contrib.auth import authenticate, login, logout
# Create your views here.


class SignUp(generic.edit.CreateView):
    form_class = CustomCreationForm
    success_url = reverse_lazy('account:login')
    template_name = 'registration/signup.html'

