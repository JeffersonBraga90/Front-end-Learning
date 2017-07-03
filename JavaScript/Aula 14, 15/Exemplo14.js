//VIDEO 14 e 15 HERANÇA

//EX DE HERANÇA USANDO PROTO (Não recomendada):
/*
var homem = {
     sexo:'Masculino'
};


var douglas = {
     nome : 'Douglas',
     idade : 22,
     __proto__: homem 
};

var jefferson = {
       nome : 'Jefferson',
       idade : 26,
       __proto__: homem
};

console.log(douglas);
console.log(jefferson);
*/

//EX DE HERANÇA (RECOMENDADA):

var homem = {
     sexo:'Masculino'
};

var douglas = {
     nome : 'Douglas',
     idade : 22,
};

Object.setPrototypeOf(douglas, homem);

console.log(douglas);
