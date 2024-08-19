"use strict";
function filtrarStringsLongas(strings) {
    return strings.filter(str => str.length > 5);
}
console.log(filtrarStringsLongas(['apple', 'banana', 'cherry', 'date', 'fig', 'grape']));
// ['banana', 'cherry']
