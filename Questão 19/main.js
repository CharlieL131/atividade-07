"use strict";
function palavraMaisLonga(frase) {
    const palavras = frase.split(' ');
    let maiorPalavra = '';
    palavras.forEach(palavra => {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    });
    return maiorPalavra;
}
console.log(palavraMaisLonga('Tutorial de desenvolvimento da web')); // 'desenvolvimento'
