//VIDEO 13 STATEMENTS

var mensagem = "Eu vou ser um programador front-end profissional.";

var praticandoStatement = function (mensagem) {
    var praticandoStatementArray = [];
    for(var i = 0; i < mensagem.length; i++){
         if(mensagem.charAt(i) === "s"){
                   praticandoStatementArray.push(0);
         }else{
            praticandoStatementArray.push(mensagem.charAt(i));
        }
     }
     return praticandoStatementArray;
};
console.log(praticandoStatement(mensagem));	