"use strict";
function encontrarPessoaMaisVelha(pessoas) {
    const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoa) => {
        return (pessoa.idade > maisVelha.idade) ? pessoa : maisVelha;
    });
    return pessoaMaisVelha.nome;
}
const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 35 },
    { nome: 'Maria', idade: 30 }
];
console.log(encontrarPessoaMaisVelha(pessoas)); // 'João'
