function verificarPropriedade(objeto: object, propriedade: string): boolean {
    return propriedade in objeto;
}

const pessoa = { nome: 'Ana', idade: 25 };
console.log(verificarPropriedade(pessoa, 'nome')); // true
console.log(verificarPropriedade(pessoa, 'altura')); // false
