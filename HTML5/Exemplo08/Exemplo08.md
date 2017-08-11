Aprendendo HTML5
===================
----------
MICRODATA
-------------

MICRODATAS ==> É um jeito padronizado de informar semânticas para as páginas. Podemos usar micro dados para demarca uma página "SOBRE MIM". Navegadores, extensões e  motores de busca podem converter suas marcações  de micro dados da HTML5 em um vCard, um formato padrão para compartilhamento de contatos.
               
A verificação de suporte a micro dados da HTML5 utiliza a "TÉCNICA DE DETECÇÃO 1". Se o seu navegador possui suporte aos micro dados da HTML5, haverá uma função getItems() no objeto global document. Se o seu navegador não possuir suporte a micro dados, a função getItems() será undefined.    

[Exemplo](https://codepen.io/JeffersonBraga/pen/dzzXNz)    



OBS: MODERNIZR AINDA NÃO POSSUI SUPORTE AOS MICRO DADOS.   


Microdata escreve o DOM com escopo dos pares de nome/valor a partir de vocabulários personalizados.

==== MODELOS DE MICRODATA ====

3 Propriedade básicas:

name ==> (Seu nome completo).
photo ==> (Um link para sua foto).
url ==> (Um link para um site associado a você, como um blog ou perfil do Google).

=== ATRIBUTOS DE MICRODATA ===

itemtype ==> Declara que vocabulário microdata estamos usando.
itemscope ==> Declara o escopo do vocabulário que estamos usando.
itemprop ==> Declara a propriedade do vocabulário.

Declaração de itemtype e itemscope:

[Exemplo](https://codepen.io/JeffersonBraga/pen/Bddzpq)



Declaração de itemprop:

[Exemplo](https://codepen.io/JeffersonBraga/pen/xLLOqg)



===== MARCANDO PEOPLE =====

Existe um vocabulário microdata para marcar informação sobre pessoas.

[Exemplo](https://codepen.io/JeffersonBraga/pen/GvvqWG)
     

===== MARCANDO ORGANIZATIONS =====

Existe um vocabulário microdata para um exemplo de página de empresas.


[Exemplo](https://codepen.io/JeffersonBraga/pen/prrbwz)

===== MARCANDO EVENTS =====

[Exemplo](https://codepen.io/JeffersonBraga/pen/OjjXgB)

===== MARCANDO REVIEWS =====

[Exemplo](https://codepen.io/JeffersonBraga/pen/YxxWre)

