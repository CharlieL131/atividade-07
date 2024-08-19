"use strict";
function calcularMediaAlunos(alunos) {
    const somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
    return somaNotas / alunos.length;
}
const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Pedro', nota: 7 }
];
console.log(calcularMediaAlunos(alunos)); // 8
