Aprendendo HTML5
===================
----------
FORMULÁRIOS WEB
-------------
========== TIPOS DE ENTRADA ==========

Aqui estão alguns novos tipos de entradas de dados podemos usar em nossos formulários:

1.  'input type="search" ==> para caixas de busca
2.  input type="number" ==> para campos incrementais
3.  input type="range" ==> para sliders
4.  input type="color" ==> para seleção de cores
5.  input type="tel" ==> para números de telefone
6.  input type="url"==> para endereços na web
7.  input type="email"==> para endereços de e-mail
8.  input type="date"==> para calendários
9.  input type="month"==> para meses
10. input type="week"==> para semanas
11. input type="time"==> para horas
12. input type="datetime"==> para precisos e absolutos data+hora
13. input type="datetime-local"==> para datas e horas locais

A verificação de suporte aos Tipos de Entrada no HTML5 utiliza a "TÉCNICA DE DETECÇÃO 4". Primeiro criamos um elemento input em memória. O tipo padrão para todos 
os elementos input é "text".

 [Exemplo](https://codepen.io/JeffersonBraga/pen/RZZRPj) 


Em seguida, configure o atributo type ao elemento input para o tipo de entrada que você quer detectar.

   [Exemplo](https://codepen.io/JeffersonBraga/pen/WEExvL) 


Se o seu navegador possuir suporte para aquele tipo de entrada em particular, a propriedade type irá reter o valor que você configurou.
Se o seu navegador não possuir suporte para aquele tipo de entrada em particular, ele irá ignorar o valor que você configurou e a propriedade type ainda será "text".

  [Exemplo](https://codepen.io/JeffersonBraga/pen/zddBvv) 


OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE PARA TODOS TIPOS DE DADOS DE ENTRADA.

EX: //VERIFICANDO SUPORTE NATIVO A DATE PICKER
    
 [Exemplo](https://codepen.io/JeffersonBraga/pen/wqqWKE?editors=1010)      


========== PLACEHOLDER ============

A verificação  de suporte ao PLACEHOLDER utiliza a "TÉCNICA DE DETECÇÃO 2". Se o seu navegador possui suporte a PLACEHOLDER EM CAMPOS DE ENTRADA,
o objeto DOM o cria para representar um elemento input que terá uma propriedade placeholder. Se o navegador não suportar placeholder,
o objeto DOM cria um elemento input não terá uma propriedade placeholder.

OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE PARA PLACEHOLDER.

EX:
    if (Modernizr.input.placeholder) {
       // seu placeholder já deve estár visível.
    }else{
       // sem suporte a placeholder
       // implemente uma solução via script 		
} 


========== AUTO FOCO DE FORMULÁRIO ============

A verificação  de suporte ao AUTO FOCO utiliza a "TÉCNICA DE DETECÇÃO 2". Se o seu navegador possui suporte a AUTO FOCO,
o objeto DOM o cria para representar um elemento <input> que terá uma propriedade autofocus. Se o navegador não suportar AUTO FOCO,
o objeto DOM cria um elemento <input> não terá uma propriedade autofocus.

OBS: PODEMOS USAR A MODERNIZR PARA DETECTAR SUPORTE A AUTO FOCO.

[Exemplo](https://codepen.io/JeffersonBraga/pen/MvveaN)      

   


Alguns atributos implementados no HTML5.

Color
Search
Date
Range
Email
Url
Required

Placeholder ==> É um texto que aparece dentro do elemento input quando o mesmo não tem o foco, quando clicado o texto desaparece.

[Exemplo](https://codepen.io/JeffersonBraga/pen/LjjZGW)      


OBS: Não tem como usar marcadores HTML no atributo placeholder. Porém tem algumas extensões do CSS que permitem	estilizar o texto do placeholder.


Number ==> Significa que é um campo numérico. Com o atributo NAMBER temos os atributos:
           min="0"   ==> específica o valor mínimo aceitável para este campo.
           max="10"  ==> é o valor maximo aceitável.
           step="2"  ==> combinado com o valor MIN define o número aceitável      dentro do intervalo: 0,2,4, e adiante, até o valor MAX.
           value="6" ==> é o valor padrão.
           
           MÉTODOS JAVASCRIPT UTÉIS:
           
           input.stepUp(n) aumenta o valor do campo por n.
           input.stepDown(n)diminui o valor do campo por n. 
           input.valueAsNumber retorna o valor atual como ponto flutuante. (A propriedade input.value sempre retorna como string.) 

  
Autofocus ==> Executa o focus automaticamente

[Exemplo](https://codepen.io/JeffersonBraga/pen/ayyZNZ)    

AUTOFOCUS COM FALLBACK
[Exemplo](https://codepen.io/JeffersonBraga/pen/PKKzNa)    




DEFININDO O AUTOFOCUS COM JQUERY FALLBACK

[Exemplo](https://codepen.io/JeffersonBraga/pen/prrbyX)    




AUTOFOCUS COM FALLBACK USANDO EVENTO PERSONALIZADO 

[Exemplo](https://codepen.io/JeffersonBraga/pen/EvvyyK)    


OBS: 
1) Definir o foco é importante.
2) De todas as possibilidades. Deixa o navegador trabalhar definindo o atributo AUTOFOCUS no campo de formulário no qual deseja o foco.
3) Se codificar um fallback para navegadores antigos, detecte o suporte do atributo AUTOFOCUS e garanta que o FALLBACK será executado apenas em navegadores antigos.
 4) Defina o foco o mais cedo possível. Insira o script de foco dentro da  marcação imediatamente após o campo de formulário. Ou use bibliotecas
JavaScript que suportam eventos personalizados, senão for possível use apenas algo como o evento $(document).ready().
5) Sobre outras circunstancias espere até carregar o window.onload para ter o foco definido.



