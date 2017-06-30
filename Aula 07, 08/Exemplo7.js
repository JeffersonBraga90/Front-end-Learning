//FUNÇÕES

/*FUNCTION DECLARATION
function soma (a, b){
  return a + b;
}
console.log(soma (2,5));
*/

/*FUNCTION EXPRESSION
var soma = function (a, b){
  return a * b;
};
console.log(soma(5,4));
*/

/*FUNÇÃO FABRICA (FACTORY FUNCTION)

var criarPessoa = function (nome, idade, sexo) {
     return {
            nome : nome,       
            idade : idade,
            sexo : sexo
     }
};
console.log(criarPessoa('Jefferson', 26,'Masculino'));

*/

/*FUNÇÃO CONSTRUTORA
var Pessoa = function (nome, idade, sexo) {
     this.nome = nome;
     this.idade = idade;
     this.sexo = sexo
};
console.log(new Pessoa('Douglas', 22 , 'Masculino'));
console.log(new Pessoa('Bruna', 30 , 'Feminino'));

*/