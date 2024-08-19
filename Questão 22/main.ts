interface Livro {
    titulo: string;
    autor: string;
    ano: number;
    // Outros campos, se necessário
}

function filtrarLivrosPorAutor(livros: Livro[], autor: string): Livro[] {
    return livros.filter(livro => livro.autor === autor);
}

const livros: Livro[] = [
    { titulo: 'Livro A', autor: 'Autor X', ano: 2020 },
    { titulo: 'Livro B', autor: 'Autor Y', ano: 2018 },
    { titulo: 'Livro C', autor: 'Autor X', ano: 2019 }
];

console.log(filtrarLivrosPorAutor(livros, 'Autor X')); 
// [{ titulo: 'Livro A', autor: 'Autor X', ano: 2020 }, { titulo: 'Livro C', autor: 'Autor X', ano: 2019 }]
