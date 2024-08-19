function filtrarStringsLongas(strings: string[]): string[] {
    return strings.filter(str => str.length > 5);
}

console.log(filtrarStringsLongas(['apple', 'banana', 'cherry', 'date', 'fig', 'grape'])); 
// ['banana', 'cherry']
