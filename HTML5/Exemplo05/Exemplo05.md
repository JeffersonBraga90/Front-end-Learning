Aprendendo HTML5
===================
----------
APLICAÇÕES WEB OFFLINE
-------------
APLICAÇÕES WEB OFFLINE ==> Começa como aplicações online. A primeira vez que você visita um site com conteúdo offline habilitado, o servidor web diz ao navegador quais arquivos ele precisar para trabalhar offline, esses arquivos podem ser qualquer coisas, como imagens, HTML, JavaScript. Uma vez que o navegador carregou todos os arquivos necessários, você pode revisitar o site até mesmo se não tiver acesso a internet, seu navegador
perceberá que você está offline e usará os arquivos que ele havia feito download. Quando você se conectar a internet, quaisquer alterações que você terá feito podem ser enviadas para o servidor web.


A verificação  do CONTEÚDO OFFLINE utiliza a "TÉCNICA DE DETECÇÃO 1". Se o seu navegador  possui a aplicação web offline, haverá uma propriedade chamada APPLICATIONCACHE no objeto global WINDOW. Se o seu navegador não possuir suporte a CONTEÚDO OFFLINE, a propriedade APPLIATIONCACHE será undefined.

OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A APLICAÇÕES WEB OFFLINE.

[Exemplo](https://codepen.io/JeffersonBraga/pen/PKKNKj) 

Aplicações web offline é uma lista de urls, HTML, CSS, JavaScript, imagens ou qualquer tipo de recurso. Uma página inicial de uma aplicação web offline aponta para uma lista, chamado de arquivo manifesto.

ARQUIVO MANIFESTO ==> É uma lista de todos os recursos que a sua aplicação web vai precisar acessar quando estiver desconectada de uma rede. Para iniciar o processo de download de cache desses recursos, precisamos apontar para o arquivo manifesto, utilizando o atributo MANIFEST no elemento html.

[Exemplo](https://codepen.io/JeffersonBraga/pen/BddKqY) 


Se estivermos rodando um servidor web baseado no Apache, precisamos adicionar uma diretiva AddType no arquivo .htacess na raíz do seu diretório web:

Ex: AddType text/cache-manifest .manifest

OBS: Dependedo do número de páginas da sua aplicação você tem que declarar o atributo manifest em todas elas.


VAMOS VER O QUE ACONTECE DENTRO DO ARQUIVO MANIFESTO

CACHE MANIFEST ==> Primeira linha de todo manifesto cache.

Depois disso, todos os arquivos manifesto são divididos em 3 partes: 

A seção: EXPLÍCITA
A seção: FALLBACK
A seção: LISTA BRANCA ONLINE

Exemplo de arquivo manifesto válido. Ele lista 3 recursos, um arquivo CSS, um arquivo JS, e uma imagem JPEG.

CACHE MANIFEST

/clock.css
/clock.js
/clock-face.jpg


====== SEÇÕES DE REDES =======

Esse arquivo de manifesto cache inclui cabeçalhos de seção. A linha  com NETWORK: é o começo dessa seção "lista branca online". Recursos dessa seção nunca sofrerão cache e não estarão disponíveis offline. (Tentar carregá-los enquanto estiver offline irá resultar em um erro). A linha marcada com CACHE: é o começo da seção "explícita". O resto do arquivo de manifesto cache é o mesmo do exemplo anterior. 

EX:

CACHE MANIFEST

NETWORK:
/tracking.cgi

CACHE:
/clock.css
/clock.js
/clock-face.jpg

======= SEÇÕES DE FALLBACK =======

Esse é mais um tipo de seção de arquivo manifesto cache. Na seção fallback podemos definir substituições para recursos online que por alguma razão qualquer, não devem realizar cache ou não realizaram cache com sucesso.


EX:

CACHE MANIFEST

FALLBACK:
/ /offline.html

NETWORK: 


Mas o que isso significa?

/ ==> É um padrão de URL. O único caractere, irá definir qualquer página do seu site, não apenas a página de entrada. Quando tentarmos acessar a página offline, nosso navegador ira procurar por ele no appcache.

/offline.html ==> Caminho especificado daquela linha na seção fallback.

'*' ==> Esse caractere tem um significado especial na seção de rede. "É chamado de curinga da lista branca online". Realiza download do endereço da web original, que não esteja na appcache.


OBS: Quando o navegador acessa uma página que aponta para um arquivo de cache manifest, ele aciona uma série de eventos no objeto window.applicationCache.


* checking                            ==> É disparado quando apontamos para o      mesmo arquivo de cache manifest.    
* downloading                         ==> Faz o download dos arquivos listados no cache manifest. (Se o seu navegador nunca viu este cache manifest antes).
* progress                            ==> Contém informações de quantos arquivos já foram baixados e quantos ainda estão na fila download.(Se o seu navegador nunca viu este cache manifest antes).
* cached                              ==> É quando a aplicação web offline está completamente cacheada e pronta para ser usada sem conexão.
* noupdate                            ==> Indica que o cache manifest não foi modificado.
* updateready                         ==> Indica que uma nova versão da aplicação web offline está totalmente cacheada e pronta para ser usada sem conexão.
* window.applicationCache.swapCache() ==> Fazer uma troca rápida para uma nova versão sem forçar o usuário a atualizar a página atual.

