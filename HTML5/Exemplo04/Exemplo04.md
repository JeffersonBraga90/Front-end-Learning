Aprendendo HTML5
===================
----------
LOCAL STORAGE
-------------
HTML5 STORAGE ==> Fornece aos sites uma forma de armazenar informações em seu computador e recuperá-los mas tarde.

A verificação  de suporte a HTML5 STORAGE utiliza a "TÉCNICA DE DETECÇÃO 1". Se o seu navegador  possui suporte a HTML5 STORAGE, haverá uma propriedade chamada
LOCALSTORAGE no objeto global WINDOW. Se o seu navegador não possuir suporte a HTML5 STORAGE, a propriedade LOCALSTORAGE será undefined.

WEB WORKERS ==> Fornecem uma maneira padrão aos navegadores de executarem JavaScript ao fundo. Com WEB WORKERS, podemos disparar múltiplas "THREADS" que irão todas serem executadas ao mesmo tempo.

A verificação  de suporte a WEB WORKERS utiliza a "TÉCNICA DE DETECÇÃO 1". Se o seu navegador  possui suporte a API WEB WORKERS, haverá uma propriedade chamada
WORKER no objeto global WINDOW. Se o seu navegador não possuir suporte a API WEB WORKERS, a propriedade WORKER será undefined.

OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A API WEB WORKERS.

[Exemplo](https://codepen.io/JeffersonBraga/pen/rzzemP) 

     


OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A HTML5 LOCAL STORAGE.

[Exemplo](https://codepen.io/JeffersonBraga/pen/GvvZZj?editors=1011) 

TRÊS DESVANTAGEM DE USAR COOKIES:

1. Cookies são incluídos em toda a requisição HTTP, atrasando assim sua aplicação web por desnecessariamente sempre transmitir os mesmos dados.
2. Cookies são incluídos em toda a requisição HTTP, enviando assim dados não criptografados através da internet (a menos que a aplicação web, seja toda servida sobre SSL).
3. Cookies são limitados acerda de 4KB de dados, suficiente para atrasar sua aplicação.
 
HTML5 STORAGE ==> É a especificação nomeada de  WEB STORAGE, que estava na especificação da HTML5 por um tempo. Certo navegadores se referenciam como "LOCAL STORAGE" ou "DOM STORAGE".

O QUE É HTML5 STORAGE?

É a forma de páginas da web armazenarem pares de chave/valor localmente, dentro do navegador do cliente.
Podemos acessar direto no nosso código JavaScript o objeto localStorage no objeto global window. 
OBS: Antes de usá-lo precisamos saber se o navegador tem suporte.

[Exemplo](https://codepen.io/JeffersonBraga/pen/xLLVEo) 

Ao invés de escrever essa função, podemos usar o Modernizr para detectar o suporte a HTML5 Storage:

[Exemplo](https://codepen.io/JeffersonBraga/pen/zddqob) 
    
LIMITAÇÕES NOS NAVEGADORES ATUAIS:

5 MEGABYTES        ==> É a quantidade de espaço padrão.
QUOTA_EXCEEDED_ERR ==> É a exceção lançada caso exceda o limite de 5 megabytes.

