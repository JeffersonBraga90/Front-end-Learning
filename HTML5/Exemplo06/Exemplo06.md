Aprendendo HTML5
===================
----------
GEOLOCALIZAÇÃO
-------------
GEOLOCALIZAÇÃO ==> Serve para descobrirmos em qual lugar do mundo nós estamos, através do nosso endereço IP, sua conexão de rede sem fio, GPS que calcula a latitude e longitude através das informações enviadas pelos satélites no céu.

A verificação  do suporte a GEOLOCALIZAÇÃO utiliza a "TÉCNICA DE DETECÇÃO 1". Se o seu navegador  possui suporte a geolocalização, haverá uma propriedade chamada GEOLOCATION no objeto global WINDOW. Se o seu navegador não possuir suporte a GEOLOCALIZAÇÃO, a propriedade GEOLOCATION será undefined.

OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A API DE GEOLOCALIZAÇÃO.

[Exemplo](https://codepen.io/JeffersonBraga/pen/OjjNGv) 

Caso seu navegador não possui o suporte nativo A GEOLOCATION, você pode usar o GEARS.

GEARS ==> É um plugin para navegadores livre, desenvolvido pelo Google que funciona no Windows, Mac, Linux, Windows Mobile e Android. Ele fornece recursos para  navegadores mais antigos.

GEO.JS ==> É uma biblioteca JavaScript de código aberto, licenciado pelo MIT, que facilita o uso  entre diferentes APIs de geolocalização da W3C, a Gears API, e as APIs fornecidas pelas próprias plataformas.
Para usá-la, teremos que adicionar dois scripts no rodapé da nossa aplicação, podemos colocar os scripts em qualquer lugar na aplicação, mas scripts no head faz com que a página carrega mais devagar.

  SCRIPTS :
           
   gears_init.js ==> inicializa o Gears caso esteja instalado.
           
   geo.js ==>
   [Exemplo](https://codepen.io/JeffersonBraga/pen/vJJGqZ) 
         


  Método init()               ==> Retorna TRUE se o suporte para a API de geolocalização estiver disponível.
 Método getCurrentPosition() ==> Encontra sua localização. O método passa dois parâmetros, ambos são funções.

 OBS: Geo.js não tem suporte para o método watchPosition(). Se precisar da localização contínua, irá precisar ativar o método getCurrentPosition().
 