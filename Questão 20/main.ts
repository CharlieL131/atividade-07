function imprimirQuadroRetangular(lista: string[]): void {
    const borda = '*'.repeat(lista.reduce((max, str) => Math.max(max, str.length), 0) + 4);

    console.log(borda);
    lista.forEach(str => {
        console.log(`* ${str.padEnd(borda.length - 4)} *`);
    });
    console.log(borda);
}

imprimirQuadroRetangular(["Hello", "World", "in", "a", "frame"]);
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
