from ..models import *
from rest_framework import serializers

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'


class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = '__all__'


class PontoTuristicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PontoTuristico
        fields = '__all__'


class EstabelecimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estabelecimento
        fields = '__all__'


class GuiaTuristicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuiaTuristico
        fields = '__all__'


class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = '__all__'