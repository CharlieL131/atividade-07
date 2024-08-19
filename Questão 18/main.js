"use strict";
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    const precoVenda = valorCusto + (valorCusto * margemLucro / 100) + valorFrete;
    return precoVenda;
}
console.log(calcularPrecoProduto(100, 20, 15)); // 135
