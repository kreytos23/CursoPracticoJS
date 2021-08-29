console.log("Hello World!!");

//Funciones de Cuadrado

const perimetroCuadrado = (lado) => {
    return lado * 4;
}

const areaCuadrado = (lado) => {
    return lado * lado;
}


//Funciones Triangulo
const alturaTrianguloIsoceles = (lado1, lado2, base) => {
    if((lado2 === lado1 === base) || (lado1 === lado2 && lado2 != base)){
        altura = Math.sqrt((lado1 ** 2) - ((base / 2) ** 2));
        return altura;
    }else {
        alert("No es un tringulo isoceles o equilatero");
    }
}

const perimetroTriangulo = (ladoA, ladoB, base) => {
    return Number(ladoA) + Number(ladoB) + Number(base);
}

const areaTrinagulo = (base, altura) => {
    return base * altura / 2;
}

//Funciones Circulo
const diametro = (radio) => {
    return radio * 2;
}

const perimetroCirculo = (radio) => {
    return (Math.PI * diametro(radio)).toFixed(3);
}

const areaCirculo = (radio) => {
    return (Math.PI * Math.pow(radio,2)).toFixed(3);
}


//Funcionamiento con HTML

function calcularPerimetroCuadrado() {
    const results = document.getElementById("resultadosCuadrado");
    const value = document.getElementById("medidaLado").value;
    const perimetro = perimetroCuadrado(value);
    results.innerText = `El valor del Perímetro es: ${perimetro}`;
}

function calcularAreaCuadrado() {
    const results = document.getElementById("resultadosCuadrado");
    const value = document.getElementById("medidaLado").value;
    const area = areaCuadrado(value);
    results.innerText = `El valor del Área es: ${area}`;
}

function calcularPerimetroTriangulo() {
    const results = document.getElementById("resultadosTriangulo");
    const ladoA = document.getElementById("medidaLadoTrianguloA").value;
    const ladoB = document.getElementById("medidaLadoTrianguloB").value;
    const base = document.getElementById("baseTriangulo").value;
    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    results.innerText = `El valor del Perímetro es: ${perimetro}`;
}

function calcularAreaTriangulo() {
    const results = document.getElementById("resultadosTriangulo");
    const base = document.getElementById("baseTriangulo").value;
    const altura = document.getElementById("alturaTriangulo").value;
    const area = areaTrinagulo(base, altura);
    results.innerText = `El valor del Área es: ${area}`;
}

function calcularPerimetroCirculo() {
    const results = document.getElementById("resultadosCirculo");
    const radio = document.getElementById("radioCirculo").value;
    const perimetro = perimetroCirculo(radio);
    results.innerText = `El valor del Perímetro es: ${perimetro}`;
}

function calcularAreaCirculo() {
    const results = document.getElementById("resultadosCirculo");
    const radio = document.getElementById("radioCirculo").value;
    const area = areaCirculo(radio);
    results.innerText = `El valor del Área es: ${area}`;
}
