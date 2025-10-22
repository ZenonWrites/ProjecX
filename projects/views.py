from django.shortcuts import render
from rest_framework import viewsets

from .models import Project
from .serializers import *

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Modules.objects.all()
    serializer_class = ModulesSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

