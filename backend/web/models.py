from django.db import models


class Usuario(models.Model):
    nome = models.CharField(max_length=128)
    idade = models.IntegerField()
    cidade = models.CharField(max_length=128)


class Comentario(models.Model):
    conteudo = models.CharField(max_length=300)
    usuario = models.ManyToManyField(Usuario, through='UsuarioEmComentario')

    def __str__(self):
        return self.conteudo


class UsuarioEmComentario(models.Model):
    comentario = models.ForeignKey(Comentario, on_delete=models.SET_NULL, null=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.SET_NULL, null=True)



class PontoTuristico(models.Model):
    nome = models.CharField(max_length=124)
    localizacao = models.CharField(max_length=128)
    descricao = models.CharField(max_length=300)
    acesso = models.CharField(max_length=124)
    valor = models.FloatField()
    funcionamento = models.TimeField
    gostei = models.IntegerField()
    nao_gostei = models.IntegerField()
    dicas = models.CharField(max_length=128)
    comentarios = models.ManyToManyField(Comentario, through='ComentarioEmPontoTuristico')

    def __str__(self):
        return self.nome


class ComentarioEmPontoTuristico(models.Model):
    comentario = models.ForeignKey(Comentario, on_delete=models.SET_NULL, null=True)
    ponto_turistico = models.ForeignKey(PontoTuristico, on_delete=models.SET_NULL, null=True)


class Estabelecimento(models.Model):
    nome = models.CharField(max_length=128)
    localizacao = models.CharField(max_length=128)
    descricao = models.CharField(max_length=128)
    categoria = models.CharField(max_length=128)
    funcionamento = models.TimeField()
    gostei = models.IntegerField()
    nao_gostei = models.IntegerField()
    comentarios = models.ManyToManyField(Comentario, through='ComentarioEmEstabelecimento')


class ComentarioEmEstabelecimento(models.Model):
    comentario = models.ForeignKey(Comentario, on_delete=models.SET_NULL, null=True)
    establecimento = models.ForeignKey(Estabelecimento, on_delete=models.SET_NULL, null=True)

class GuiaTuristico(models.Model):
    nome = models.CharField(max_length=128)
    local_de_atendimento = models.ManyToManyField(PontoTuristico, through='PontoTuristicoEmGuiaTuristico')



class PontoTuristicoEmGuiaTuristico(models.Model):
    guia_turistico = models.ForeignKey(GuiaTuristico, on_delete=models.SET_NULL, null=True)
    ponto_turistico = models.ForeignKey(PontoTuristico, on_delete=models.SET_NULL, null=True)


class Evento(models.Model):
    nome = models.CharField(max_length=128)
    local = models.CharField(max_length=128)
    horario = models.DateTimeField()
    descricao = models.CharField(max_length=300)
    estabelecimento = models.ForeignKey(Estabelecimento)
