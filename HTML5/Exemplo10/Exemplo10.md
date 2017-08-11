Aprendendo HTML5
===================
----------
SEMÂNTICA
-------------

========== DOCTYPE ============

Diferentes modos de renderização do "DOCTYPE" são eles:

QUIRKS MODE (MODO PECULIAR) => Os browser violam as especificações da web comtemporânea  para evitar quebrar páginas.

STANTARDS MODE (MODO PADRÃO) => Os browser tentam, conforme os documentos da especificação, tratar corretamente a extensão implementada para um browser específico. Para o HTML5 este é o QUIRKS MODE.

ALMOST STANTARDS MODE (MODO QUASE PADRÃO) => Firefox, Chrome, Opera e Safari a partir da versão 7.5 e o IE8 também possuem o modo de conhecimento como "MODO QUASE PADRÃO", que implementa o dimensionamento vertical das células de tabelas tradicionalmente e não rigorosamente. Para o HTML5 este é o LIMITED QUIRKS MODE.


DOCTYPE DO HTML5:  //OBS também dispara STANTARDS MODE para todos os browser atuais.

SINTAXE: 

[Exemplo](https://codepen.io/JeffersonBraga/pen/eEEzMZ)    



========== O ELEMENTO RAIZ ============

O elemento RAIZ de uma página é sempre o html.

ELEMENTO RAIZ NO HTML5:

SINTAXE:
[Exemplo](https://codepen.io/JeffersonBraga/pen/BddzrM)    

 


========== O ELEMENTO HEAD ============

O elemento head geralmente é filho do elemento raiz. O head não mudou nada no HTML5, o head contém informações de metadata sobre a página em vez do próprio corpo da página.


========== CODIFICAÇÃO DE CARACTERES ============

Devemos sempre especificar um character enconding em todos os nossos documentos HTML, senão declarar podemos ter problemas de vulnerabilidades de segurança. Você pode fazer isso com o HTTP Content-Type header, com declaração meta http-equiv , ou com  a declaração mais curta meta charset.

ELEMENTO META NO HTML5:

SINTAXE:
[Exemplo](https://codepen.io/JeffersonBraga/pen/XaaKYN)  
 


========== AMIGOS E (LINKS) RELATIONS ============

Links normais`<a href=>`  simplesmente apontam para uma outra página. Link relations são maneiras  de explicar o porque você está apontando para uma outra página. HTML5 separa os links relations em duas partes:

Links para recursos externos => São links usados para extender um documento atual. OBS: Somente (rel="stylesheet") é um link de recursos externos.
Hiperlinks => São links para outros documentos.


* REL STYLESHEET =>  Este é o link relation mais usado literalmente, ele aponta para regra CSS que estão armazenadas em um arquivo separado.

   SINTAXE:
  [Exemplo](https://codepen.io/JeffersonBraga/pen/vJJKar)  
 
 


* REL ALTERNATE => Permite que os leitores de feed descubram  que um site tem um feed de notícias dos últimos artigos.

 SINTAXE :  
  [Exemplo](https://codepen.io/JeffersonBraga/pen/ZJJOMO)  
 
 // OBS: Não remover o atributo "TYPE".


* REL AUTHOR => É usado para apontar informações sobre o autor da página.
* REL EXTERNAL => Indica que o link trata-se de um documento que não faz parte do site em que o documento atual está.
* REL ICON => É o segundo link relation mais popular, ele geralmente é encontrado junto do shortcut.

 [Exemplo](https://codepen.io/JeffersonBraga/pen/RZZRYY)  

OBS: Novo no HTML5 o atributo SIZE pode se usado em conjunto com ÍCONE para indicar o tamanho do ícone.

* REL LICENSE => Indica que o documento referenciado fornece termos de licença sob o qual o documento atual é fornecido.
* REL NOFOLLOW => Indica que um link não foi aprovado pelo autor original ou publicador da página.
* REL NOREFERRER => Indica que nenhuma informação deve ser vazada ao clicar no link.
OBS: Atualmente nenhum browser suporta isso.
* REL PINGBACK => Especifica o endereço de um servidor pingback.
* REL PREFETCH => Indica que buscar e armazenar um recurso especificado é provável que seja benéfico. Mozilla Firefox é o único browser que suporta rel="prefetch".
* REL SEARCH => Indica  que o documento referenciado fornece uma interface específica para procurar o documento e seus recursos relacionados. Se você quiser que o rel="search" faça algo útil, ele tem que apontar para um documento OpenSearch que descreve como o browser poderia construir uma URL para procurar o site atual para uma dada palavra-chave.
* REL SIDEBAR => Indica que o documento referenciado, se recuperado, destina-se a ser exibido em um contexto de navegação secundário (se possível), ao invés de no mesmo contexto atual.
* REL TAG => Indica que a tag que o documento referenciado representa aplica-se ao documento atual.




==== NOVOS ELEMENTOS SEMÂNTICOS NO HTML5  =====

`<section>` => Representa uma seção genérica de um documento ou aplicação.
`<nav>`     => Representa a seção de uma página que aponta para outra página ou partes dentro da página. Nem todos os grupos de links da página precisam estar em um elemento `<nav>` apenas seções que consistem em grandes blocos de navegação.
`<article>` => Representa um componente de uma página que consiste em uma composição de conteúdo próprio em um documento, páginas, aplicação ou site.
`<aside>`   => Representa a seção de uma página que consiste em conteúdo que é tangencialmente relacionado ao conteúdo. São frequentemente representadas como barras laterais em tipografia impressa.
`<header>`  => Um elemento header  geralmente pretende possuir  o título da seção, mas isso não é obrigatório. O elemento header também pode ser usado para cobrir uma seção de tabelas de conteúdo, um formulário de busca, ou qualquer logo relevante.
`<footer>`  => O elemento footer representa o rodapé para a seção de conteúdo próxima do elemento raiz. Um rodapé tipicamente contém informações sobre sua seção tal como quem a escreveu, links para documentos, declaração de direitos autorais e assim por diante. Os rodapés não precisam aparecer necessariamente no fim da seção embora eles geralmente aparecem.
`<time>`    => Representa hora em um relógio de 24hs, como uma data precisa no calendário gregoriano.
`<mark>`    => Representa a execução de texto em um documento marcado ou destacado. 
