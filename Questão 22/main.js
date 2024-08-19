"use strict";
function filtrarLivrosPorAutor(livros, autor) {
    return livros.filter(livro => livro.autor === autor);
}
const livros = [
    { titulo: 'Livro A', autor: 'Autor X', ano: 2020 },
    { titulo: 'Livro B', autor: 'Autor Y', ano: 2018 },
    { titulo: 'Livro C', autor: 'Autor X', ano: 2019 }
];
console.log(filtrarLivrosPorAutor(livros, 'Autor X'));
// [{ titulo: 'Livro A', autor: 'Autor X', ano: 2020 }, { titulo: 'Livro C', autor: 'Autor X', ano: 2019 }]
