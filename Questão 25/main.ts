function inverterString(texto: string): string {
    return texto.split('').reverse().join('');
}

console.log(inverterString('Hello World')); // 'dlroW olleH'
console.log(inverterString('Javascript')); // 'tpircsavaJ'
