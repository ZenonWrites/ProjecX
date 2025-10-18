from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    domain = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    start_date = models.DateField()
    due_date = models.DateField()
    SRS = models.FileField(upload_to='srs/', null=True, blank=True)
    STATUS_CHOICES = [
        ('TO DO', 'To Do'),
        ('ON_GOING', 'On Going'),
        ('COMPLETED', 'Completed'),
        ('DUE', 'Due'),
    ]
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='TO DO'
    )

    PRIORITY_CHOICES = [
        ('LOW', 'Low'),
        ('MEDIUM', 'Medium'),
        ('HIGH', 'High'),
    ]
    priority = models.CharField(
        max_length=20,
        choices=PRIORITY_CHOICES,
        default='LOW'
    )

    progress = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(100)]) #for Progress checking
    tasks = models.IntegerField(default=0)
    modules = models.IntegerField(default=0)

    def __str__(self):
        return self.name

