const precioOriginal = 3000;
const descuento = 12;

function precioFinal(precioOriginal, descuento) {
    const final = precioOriginal * (1 - (descuento / 100 ));
    return final;
}

console.log(precioFinal(precioOriginal, descuento));