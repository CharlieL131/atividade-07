function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
    const digitos = numero.toString().split('');
    let pares = 0;
    let impares = 0;

    digitos.forEach(digito => {
        const n = parseInt(digito, 10);
        if (n % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });

    return { pares, impares };
}

console.log(contarDigitosParesImpares(123456)); // { pares: 3, impares: 3 }
