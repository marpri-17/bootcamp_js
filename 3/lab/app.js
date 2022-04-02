"use strict";

const taxesByType = {
    alimentacion: 0.1, // 10%
    libro: 0.04, // 4%,
    others: 0.21 // 21%
}

const product = { count: 3, price: 5.50, type: "alimentacion" };

// Total Price calculation

// Get taxes
const getVat = (product) => {
    switch (product.type) {
        case 'alimentacion':
            return product.price * taxesByType.alimentacion;
        case 'libro':
            return product.price * taxesByType.libro;

        default:
            return product.price * taxesByType.others;

    };
}

function getTotalVat(product, totalPerUnitWithTaxes) {
    return product.count * (totalPerUnitWithTaxes + product.price);
}

function getTotal(product) {
    if (product.count > 0) {
        console.log("Subtotal:", product.count * product.price + "€");
        const vat = getVat(product)
        console.log("IVA:", vat + " €");
        const totalPrice = getTotalVat(product, vat);
        console.log("Total:", totalPrice + " €");
    } else {
        console.log('No hay stock. Precio 0€')
    }
}

getTotal(product);

console.log('%c--- EMPLEADOS ---', 'font-size: 18px; color: blue')
// Nómina
const empleado = {
    bruto: 28000,
    hijos: 2,
    pagas: 12,
};

const retributionRanges = {
    one: 0,
    two: 0.08,
    three: 0.16,
    four: 0.30
}

function getRetributionRange(bruto) {
    if (bruto < 12000) {
        return retributionRanges.one
    } else if (bruto > 12000 && bruto < 24000) {
        return retributionRanges.two;
    } else {
        return retributionRanges.four;
    }
}

function calculateFamilyDeduction(empleado) {
    const familyDeduction = 0.02; // 2%
    let retributionTaxes = getRetributionRange(empleado.bruto);
    console.log(`Total retención a aplicar:  ${retributionTaxes}`);
    if (empleado.hijos > 0 && retributionTaxes > 0) {
        console.log(`El empleado tiene ${empleado.hijos} hijos. La deducción aplicacada es del 2%`)
        retributionTaxes -= familyDeduction;
        console.log(`Total retención a aplicar:  ${retributionTaxes}`)
        return empleado.bruto - (empleado.bruto * retributionTaxes);
    } else {
        console.log('El empleado no tiene hijos o su nivel de renta está exento de declaración. No se aplica deducción.')
        return empleado.bruto - (empleado.bruto * getRetributionRange(empleado.bruto));
    }

}

function calculateMonthlyPayroll(empleado) {
    const anualNetSalary = calculateFamilyDeduction(empleado);
    // controls payments info is correct
    // else we assume it's 12
    if (isNaN(empleado.pagas)) empleado.pagas = 12;
    return anualNetSalary / empleado.pagas


}

const monthlySalary = calculateMonthlyPayroll(empleado);
console.log('Tras impuestos, el sueldo mensual del empleado es de  ' + monthlySalary + ' € en ' + empleado.pagas + ' pagas');


