"use strict";
function filtrarCarrosPorAno(carros, ano) {
    return carros.filter(carro => carro.ano > ano);
}
const carros = [
    { marca: 'Ford', modelo: 'Fiesta', ano: 2015 },
    { marca: 'Chevrolet', modelo: 'Onix', ano: 2019 },
    { marca: 'Toyota', modelo: 'Corolla', ano: 2021 }
];
console.log(filtrarCarrosPorAno(carros, 2018));
// [{ marca: 'Chevrolet', modelo: 'Onix', ano: 2019 }, { marca: 'Toyota', modelo: 'Corolla', ano: 2021 }]
