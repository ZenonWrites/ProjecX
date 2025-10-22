from rest_framework import serializers
from .models import Project, Modules, Task

class ProjectSerializer(serializers.ModelSerializer):
    modules = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Project
        fields = [
            'id', 'name', 'domain', 'description', 'start_date', 'due_date',
            'status', 'priority', 'progress', 'tasks', 'module_count', 'modules'
        ]

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class ModulesSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)
    class Meta:
        model = Modules
        fields = ['id', 'name', 'project', 'tasks']
