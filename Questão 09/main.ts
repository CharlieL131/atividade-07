function calcularDesconto(valor: number, percentual: number): number {
    return valor - (valor * percentual / 100);
}

console.log(calcularDesconto(100, 10)); // 90
