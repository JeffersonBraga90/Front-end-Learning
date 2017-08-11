Aprendendo HTML5
===================
----------
VÍDEO
-------------
A HTML5 define um elemento chamado vídeo para embutir vídeo nas páginas web. Porém embutir vídeo costuma ser impossível sem plugins de terceiros como
Apple QuickTime ou Adobe Flash. O elemento vídeo é projeto sem a necessidade de scripts de detecção, você pode especificar múltiplos arquivos  de vídeo, e os
navegadores que tem suporte ao HTML5 video escolheram uns formatos suportados por ele.

Navegadores que não possuem suporte ao HTML5 vídeo irão ignorar o elemento video completamente, mas você pode fazer o video tocar atráves de plugins chamado
VIDEO FOR EVERYBODY que faz uso do HTML5 vídeo onde estiver disponivel, porém fazendo tratamento para o uso de QUICKTIME ou FLASH em navegadores antigos.
 	
Para checar suporte a video usamos a  "TÉCNICA DE DETECÇÃO 2". Se o seu navegador possui suporte a HTML5 vídeo, o objeto DOM o cria para representar um elemento
video que terá um método canPlayType(). Se o navegador não suportar a HTML5 vídeo, o objeto DOM cria um elemento video que terá uma coleçaõ de propriedade
comum a todos os elementos.

OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A HTML5 VIDEO.

[Exemplo](https://codepen.io/JeffersonBraga/pen/xLLVbe) 

FORMATOS DE VÍDEO
-------------
A verificação  de suporte a formatos de vídeo utiliza a "TÉCNICA DE DETECÇÃO 3". Se o seu navegador  possui suporte a HTML5 vídeo, o objeto DOM criado para representar um elemento vídeo terá um método canPlayType(). Esse método dirá se o seu browser possui suporte a um determinado formato de vídeo.

OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A FORMATODS DA HTML5 VIDEO.

[Exemplo](https://codepen.io/JeffersonBraga/pen/ayyNOM?editors=1010) 

Antes do HTML5 os videos eram rodados em talvez em  "REALPLAYER", "QUICKTIME", "FLASH".

FORMATOS DE EMBALAGENS DE VÍDEO:

MPEG 4                 ==> Usualmente com a extensão .mp4 ou .m4v.
FLASH                  ==> Usualmente com a extensão .flv.
OGG                    ==> Usualmente com a extensão .ogv.
WebM                   ==> É um novo formato de embalagem. É formatado nativamente sem qualquer plataforma específica de plugins.
AUDIO VIDEO INTERLEAVE ==> Usualmente com a extensão .avi


CODECS DE VÍDEO:

Quando assistimos um vídeo, nosso vídeo player está fazendo pelo menos três coisas ao mesmo tempo:

1. Interpretando a embalagem, para descobrir quais faixar de vídeo e áudio estão disponíveis, e como elas são armazenadas dentro do arquivo para que possa encontrar os dados que necessitam  ser decodificados depois.

2. Decodifica o fluxo de vídeo e exibi uma série de imagens na tela.

3. Decodifica o fluxo de áudio e envia o som para as caixas de som.

TRÊS CODECS MAIS RELEVANTES SÃO:

H.264
Theora
VP8

CODECS DE ÁUDIO:

São algorítimos nos quais os fluxos de áudio são codificados. Aúdios possuem CANAIS, e vídeos não.

TIPOS DE ÁUDIOS PARA WEB:

MP3    
AAC     
VORBIS

MIRO VIDEO CONVERTER ==> É um programa de código aberto para codificação de vídeo em múltiplos formatos com licença GPL.

FIREFOGG ==> É uma extensão do firefox open source, com licença GPL para codificar vídeo Ogg.

FFMPEG2THEORA ==> É uma aplicação para codificação de vídeo ogg de código livre, licenciado pela GPL.
OBS: Para usar tem que chamar via terminal.

HANDBRAKE ==> É uma aplicação para codificação de vídeo H.264 open source, com licença GPL. O HANDBRAKE possui duas versões: Gráficas e Linha de Comando.

OBS: Arquivos de vídeos devem ser servidos com o MIME TYPES correto.

FLOWPLAYER ==> É de código livre, licenciado com GPL, com vídeo player baseado em Flash.
