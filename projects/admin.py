from django.contrib import admin
from .models import Project


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'domain', 'description', 'created_at', 'start_date', 'due_date', 'status', 'priority', 'progress', 'task_count')
    search_fields = ('name', 'domain', 'description')
    list_filter = ('status', 'priority')

admin.site.register(Project, ProjectAdmin)
# Register your models here.
