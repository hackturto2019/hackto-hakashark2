from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from .serializers import *
from ..models import *


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    search_fields = ['nome']
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = '__all__'
    ordering_fields = ['nome']


class ComentarioViewSet(viewsets.ModelViewSet):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer
    search_fields = ['conteudo']
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = '__all__'
    ordering_fields = ['conteudo']


class PontoTuristicoViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = PontoTuristicoSerializer
    search_fields = ['nome']
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = '__all__'
    ordering_fields = ['nome']


class EstabelecimentoViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = EstabelecimentoSerializer
    search_fields = ['nome']
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = '__all__'
    ordering_fields = ['nome']


class GuiaTuristicoViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = GuiaTuristicoSerializer
    search_fields = ['nome']
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = '__all__'
    ordering_fields = ['nome']


class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
    search_fields = ['nome']
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = '__all__'
    ordering_fields = ['nome']