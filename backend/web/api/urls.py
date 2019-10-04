from django.urls import include, path
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'usuario', UsuarioViewSet, basename='usuario')
router.register(r'comentario', ComentarioViewSet, basename='comentario')
router.register(r'ponto_turistico', PontoTuristicoViewSet, basename='ponto_turistico')
router.register(r'estabelecimento', EstabelecimentoViewSet, basename='estabelecimento')
router.register(r'guia_turistico', GuiaTuristicoViewSet, basename='guia_turistico')
router.register(r'evento', EventoViewSet, basename='evento')


urlpatterns = [
    path('', include(router.urls)),
]