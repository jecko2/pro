from django import forms
from .models import CalculatePrice, Assignment


class CalculatePriceForm(forms.ModelForm):
    class Meta:
        model = CalculatePrice
        fields = ['paper', 'level', 'pages', ]


class AssignmentForm(forms.ModelForm):
    class Meta:
        model = Assignment
        fields = ['service', 'subject', 'images', 'title', 'end_date', 'summary',]
