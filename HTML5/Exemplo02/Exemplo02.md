Aprendendo HTML5
===================
----------
CANVAS
-------------
Canvas é uma tela de bitmap de resolução dependente que pode ser usadas para renderizar gráficos de jogos, grafos ou outras imagens visuais em tempo real.
Canvas é um retângulo na página onde podemos usar Javascript para desenhar qualquer coisa.

A verificação da API do canvas usa a "TÉCNICA DE DETECÇÃO 2". Se o seu navegador suporta a API do canvas, o objeto DOM o cria para representar um elemento canvas que terá um método getContext(). Se o navegador não suportar a API do canvas, o objeto DOM cria um elemento canvas que terá um conjunto de propriedade mas nada específico do canvas.

O suporte para canvas para Internet Explorer 7 e 8 necessitam da biblioteca "EXPLORERCANVAS", a Internet Explorer 9 suporta canvas nativamente.

OBS: Ao usar qualquer método no DOM, você chama o método getContext() e DEVE passar a string "2d" para o método getContext().

OBS: PARA DETECTAR O SUPORTE A API DO CANVAS PODEMOS USAR A MODERNIZR.

PROPRIEDADES E MÉTODOS:

fillStyle   ==> A propriedade fillStyle pode ser uma cor, padrão ou degradê do CSS. O padrão para o fillStyle é preto sólido.
fillRect    ==> (x, y, largura, altura) desenha um retângulo preenchido com fillStyle.
strokeStyle ==> É como a propriedade fillStyle pode ser como cor ou degradê.
strokeRect  ==> (x, y, largura, altura) desenha um retângulo com o strokeStyle. strokeRect desenha apenas as bordas.
clearRect   ==> (x, y, largura, altura) limpa os pixels no retângulo especificado.
context.beginPath() ==> Novo caminho.
context.stroke() ==> Desenha a linha no canvas.


COORDENADAS DO CANVAS:

O canvas é uma grade bidimensional, a coordenada (0,0) fica no canto superior esquerdo do canvas. Ao longo do eixo X os valores aumentam em direção a borda direita
da tela. Ao longo do eixo Y, os valores aumentam em direção a borda de baixo do canvas.

Para definir o elemento canvas precisamos definir a largura (width), a altura (height) e o identificador (id).

SINTAXE:    [Canvas](https://codepen.io/JeffersonBraga/pen/QMMyzg) 

CAMINHOS:

Para desenhar linhas retas com lápis, use os dois métodos seguintes:

1. moveTo(x, y) ==> Move o lápis para o ponto inicial especificado.
2. lineTo(x, y) ==> Desenha a linha para o ponto inicial especificado.

 
TEXTO:

Mesmo que o seu nagevador suporte a API canvas, ele pode não suporta a API do texto canvas. A API do canvas foi criada através do tempo, e as funções foram adicionadas por último. Alguns navegadores começaram a suporta canvas antes da API de texto estar completa.

A varificação da API do canvas usa a "TÉCNICA DE DETECÇÃO 2". Se o seu navegador suporta a API do canvas, o objeto DOM o cria para representar um elemento canvas que terá um método getContext(). Se o navegador não suportar a API do canvas, o objeto DOM cria um elemento canvas que terá um conjunto de propriedade mas nada específico do canvas.
Podemos desenhar texto com canvas. Diferentemente do texto em torno de uma página web, isso significa que nenhuma  das técnicas familiares de layout  em CSS são validas.


ATRIBUTOS DE FONTES:

font         ==> Pode ser qualquer coisa que colocarmos na regra font do CSS. Exemplo, font-style, font-size etc...
textAlign    ==> Controla o alinhamento do texto. Os possíveis valores são: start, end, left, right, e center.
textBaseline ==> Controla onde o texto é desenhado relativo ao ponto de inicio. Os possíveis valores são: top, hanging, middle, alphabetic, ideographic, ou bottom.


DEGRADÊS:

A Internet Explores 7 e 8 necessitam  da biblioteca "EXPLORERCANVAS", a Internet Explores 9 suporta canvas degradê nativamente.
O degradê é uma transição suave entre duas ou mais cores. O contexto do canvas suporta dois tipos de degradês:

1. createLinearGradient(x0, y0, x1, y1) pinta atráves de uma linha de (x0, y0) até (x1, y1).
2. createRadialGradient(x0, y0, r0, x1, y1, r1) pinta através de um cone entre dois círculos, os primeiros três parâmetros representam o início do circulo com origem (x0, y0) e o raio r0. Os últimos três parâmetros representam o fim do circulo, com origem (x1, y1) e o raio r1.

add.ColorStop() => Defini o degradê. 


IMAGENS:

Para desenhar imagens com canvas usamos o método drawImage(), esse método pode ter 3, 5 ou 9 argumentos.

drawImage ==> (image, dx, dy) pega uma imagem e desenha no canvas. A coordenada (dx, dy) é o canto superior esquerdo da imagem. Coordenadas (0, 0) devem desenhar a imagem no canto superior esquerdo do canvas.

drawImage ==> (image, dx, dy, dw, dh) pega uma imagem e escala a largura(dw) e a altura(dh) e a desenha no canvas com as coordenadas (dx, dy).
drawImage ==> (image, sx, sy, sw, sh, dx, dy, dw, dh) pega a imagem e ajusta ela para o retângulo (sx, sy, sw, sh), e escala para as dimensões (dw, dh), e a desenha no canvas nas coordenadas (dx, dy).


Versões do Internet Explorer antes do 9.0 não suportam a API de canvas (IE9 suporta completamente a API de canvas). Entretanto essas versões mais antigas do Internet Explorer suportam SIM uma tecnologia proprietária da Microsoft chamada VML na qual pode fazer muitas coisas que o elemento canvas faz. E assim nasceu o "excanvas.js".

Explorercanvas(excanvas.js) ==> É uma biblioteca Javascritp de código livre, licenciada pela Apache que implementa a API de canvas no Internet Explorer.
Para utilizá-lo, inclua o elemento script na head da sua página.
                                
[Script](https://codepen.io/JeffersonBraga/pen/prrgmp)                                 
 
Algumas limitações do canvas para Internet Explorer inferiores a IE9:

1. Degradês só podem ser lineares. Degradês radiais não são suportados.
2. Padrões devem se repetir em ambas as direções.
3. Regiões clipping não são suportados.
4. Escala não uniforme não funciona corretamente com escalas de bordas.
5. É lento.

