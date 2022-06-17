from uuid import uuid4
import uuid
from django.urls import reverse
from django.db import models
from django.conf import settings


PAPER_TYPE = (
('Assignment','Assignment'),
('Content', 'Content'),
('Admission', 'Admission'),
('Argumentative','Argumentative'),
('Article', 'Article Writing'),
('Movie', 'Movie Review'),
('Business', 'Business Plan'),
('Capstone', 'Capstone Project'),
('Case', 'Case Study'),
('Coursework', 'Coursework'),
('Creative', 'Critical Thinking'),
)
LEVEL = (
    ('HS', 'High School'),
    ('UG','Undergraduate'),
    ('M', 'Masters'),
    ('D', 'Doctoral')
)

SERVICE_TYPE = (
    ('AW', 'Academic Writing'),
    ('EP', 'Editting & Proofreading')
)
SUBJECT_AREA = (
    ('Biology', 'Biology'),
    ('Mathematics', 'Mathematics'),
    ('Economics', 'Economics')
)

class CalculatePrice(models.Model):
    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    paper = models.CharField(max_length=100, choices=PAPER_TYPE)
    level = models.CharField(max_length=10, choices=LEVEL)
    pages = models.PositiveIntegerField(default=1)
    order_date = models.DateTimeField(auto_now_add=True)
    price = models.PositiveIntegerField(default=1)        
    
    class Meta:
        get_latest_by = ['-order_date']
    
    def get_price(self):
        return self.price
    
    def __str__(self):
        return self.paper
    

class Assignment(models.Model):
    service = models.CharField(max_length=100, choices=SERVICE_TYPE)
    order = models.OneToOneField(CalculatePrice, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100, choices=SUBJECT_AREA)
    images = models.ImageField(upload_to='assignment/', blank=True, null=True)
    title = models.CharField(max_length=100)
    summary = models.TextField()
    end_date = models.DateField(auto_now_add=False)
    
    
    def get_absolute_url(self):
        return reverse("order_detail", kwargs={"pk": self.pk})
    
    def __str__(self):
        return self.service