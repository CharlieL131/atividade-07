"use strict";
function calcularIdade(nascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - nascimento;
}
console.log(calcularIdade(1990)); // 34 (se o ano atual for 2024)
