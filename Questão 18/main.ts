function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number): number {
    const precoVenda = valorCusto + (valorCusto * margemLucro / 100) + valorFrete;
    return precoVenda;
}

console.log(calcularPrecoProduto(100, 20, 15)); // 135
