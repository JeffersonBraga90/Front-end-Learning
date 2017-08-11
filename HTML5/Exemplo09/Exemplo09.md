Aprendendo HTML5
===================
----------
HISTORY API
-------------

A API de Histórico é uma maneira padronizada para manipular o histórico do navegador via script. Parte dessa API está disponível nas versões
anteriores do HTML. As novas funcionalidades em HTML5 incluem uma maneira de adicionar entradas ao histórico do navegador, para visivelmente alterar a URL na barra de endereço do navegador (sem precisar atualizar a página).

A verificação de suporte a API de histórico da HTML5 utiliza a "TÉCNICA DE DETECÇÃO 1". Se o seu navegador possui suporte a API de histórico da HTML5, haverá uma função pushState() no objeto global history. Se o seu navegador não possui suporte a API de histórico, a função pushState() será undefined.

A API de histórico permite, que ao invés de desencadear uma atualização na página inteira, você pode utilizar um script para baixar a metade
de uma página.

A API de histórico é apenas vários métodos no objeto WINDOW.HISTORY. 


OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A API DE HISTÓRICO DA HTML5.

[Exemplo](https://codepen.io/JeffersonBraga/pen/VzzjyQ)    

    
