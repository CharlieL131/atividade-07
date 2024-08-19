function gerarTabuada(numero: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

gerarTabuada(5);
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
