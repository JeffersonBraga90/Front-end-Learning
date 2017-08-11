Aprendendo HTML5
===================
----------
TÉCNICAS DE DETECÇÃO 
-------------
Existe 4 técnicas básicas para detectar se o browser suporta funcionalidade expecífica.

1ª => Verifica se uma propriedade existe em um objeto global (como "WINDOW" ou "NAVIGATOR").
      EX: Testar suporte a Geolocalização

2º => Crie um elemento, verificar se uma determinada propriedade existe naquele elemento.
      EX: Testar suporte a Canvas

3º => Crie um elemento, verificar se existe método naquele elemento, então chame o método e verificar o valor que ele retorna.
      EX: Testar quais formatos de videos são suportados.

4º => Crie um elemento, defina a propriedade para um determinado valor, então verifique se a propriedade manteve seu valor.
      EX: Testar quais tipos INPUT são suportados.


MODERNIZR, BIBLIOTECA DE DETECÇÃO DA HTML5
-------------
Modernizr é uma biblitoteca JavaScript, de código aberto, sobe licença do MIT, essa biblioteca detecta suporte a várias funcionalidades de HTML5 e CSS3.
OBS: DEVEMOS USAR SEMPRE A ÚLTIMA VERSÃO. PARA USÁ-LA BASTA INSERIR SEU SCRIPT NA HEAD DO HTML.
A Modernizr executa automaticamente, não precisa de uma função para ser chamada. Quando ela roda cria um objeto global chamado "MODERNIZR", que contém um 
conjunto de propriedades booleanas para cada funcionalidades que ela puder detectar.