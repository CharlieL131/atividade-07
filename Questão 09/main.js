"use strict";
function calcularDesconto(valor, percentual) {
    return valor - (valor * percentual / 100);
}
console.log(calcularDesconto(100, 10)); // 90
