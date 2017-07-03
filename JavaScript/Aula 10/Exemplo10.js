/*EXPRESSÃO REGULAR*/

var regExp = /\(\d{2}\)\s\d{4,5}\d{4}/;
var telefone = '(24) 987654321';    
console.log(regExp.test(telefone));