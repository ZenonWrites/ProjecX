from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.contrib.auth.models import User

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
    task_count = models.IntegerField(default=0)
    module_count = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Modules(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='modules')
    name = models.CharField(max_length=100)


    def __str__(self):
        return self.name


class Task(models.Model):
    STATUS_CHOICES = [
        ('TO DO', 'To Do'),
        ('IN PROGRESS', 'In Progress'),
        ('DONE', 'Done'),
    ]

    PRIORITY_CHOICES = [
        ('LOW', 'Low'),
        ('MEDIUM', 'Medium'),
        ('HIGH', 'High'),
    ]

    module =  models.ForeignKey(Modules, on_delete=models.CASCADE, related_name='tasks')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='TO DO')
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='MEDIUM')
    due_date = models.DateField()
    assignee = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.title

