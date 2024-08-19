"use strict";
function calcularMediaArredondada(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    const media = soma / numeros.length;
    return Math.round(media);
}
console.log(calcularMediaArredondada([7, 8, 9])); // 8
console.log(calcularMediaArredondada([10, 4, 6])); // 7
