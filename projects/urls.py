from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'modules', ModuleViewSet, basename='module')
router.register(r'tasks', TaskViewSet, basename='task')
router.register(r'clients', ClientViewSet, basename='client')

urlpatterns = router.urls