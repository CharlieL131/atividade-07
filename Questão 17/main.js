"use strict";
function verificarPropriedade(objeto, propriedade) {
    return propriedade in objeto;
}
const pessoa = { nome: 'Ana', idade: 25 };
console.log(verificarPropriedade(pessoa, 'nome')); // true
console.log(verificarPropriedade(pessoa, 'altura')); // false
