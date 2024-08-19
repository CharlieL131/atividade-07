"use strict";
function calcularImpostoRenda(salario) {
    if (salario <= 1903.98)
        return 0;
    else if (salario <= 2826.65)
        return salario * 0.075;
    else if (salario <= 3751.05)
        return salario * 0.15;
    else if (salario <= 4664.68)
        return salario * 0.225;
    return salario * 0.275;
}
console.log(calcularImpostoRenda(3000)); // 450
