const precioOriginal = 3000;
const descuento = 12;

function precioFinal(precioOriginal, descuento) {
    const final = precioOriginal * (1 - (descuento / 100 ));
    return final;
}

function imprimirPrecio() {
    const precioInicial = document.getElementById("precioInicial");
    const porcentaje = document.getElementById("porcentajeDescuento");
    const resultado = document.getElementById("final-price");

    const precio = precioFinal(Number(precioInicial.value), Number(porcentaje.value));

    resultado.innerText = `$ ${precio}`;

}