from rest_framework import serializers
from .models import Project, Modules, Task, Client

class ClientSerializer(serializers.ModelSerializer):
    projects = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Client
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    modules = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Project
        fields = [
            'id', 'name', 'domain', 'description', 'start_date', 'due_date','no_of_hours',
            'status', 'priority', 'progress', 'task_count', 'module_count', 'modules', 'client'
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
