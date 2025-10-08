from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    domain = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    start_date = models.DateField()
    due_date = models.DateField()
    STATUS_CHOICES = [
        ('ON_GOING', 'On Going'),
        ('COMPLETED', 'Completed'),
        ('DUE', 'Due'),
    ]
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='ON_GOING'
    )
    def __str__(self):
        return self.name

