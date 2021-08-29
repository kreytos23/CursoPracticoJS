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
    return Math.PI * diametro(radio);
}

const areaCirculo = (radio) => {
    return Math.PI * Math.pow(radio,2);
}


//Funcionamiento con HTML

function calcularPerimetroCuadrado() {
    const value = document.getElementById("medidaLado").value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es: " + perimetro);
}

function calcularAreaCuadrado() {
    const value = document.getElementById("medidaLado").value;
    const area = areaCuadrado(value);
    alert("El area es: " + area);
}

function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById("medidaLadoTrianguloA").value;
    const ladoB = document.getElementById("medidaLadoTrianguloB").value;
    const base = document.getElementById("baseTriangulo").value;
    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert("El perimetro es: " + perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("baseTriangulo").value;
    const altura = document.getElementById("alturaTriangulo").value;
    const area = areaTrinagulo(base, altura);
    alert("El area es: " + area);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radioCirculo").value;
    const perimetro = perimetroCirculo(radio);
    alert("El perimetro es: " + perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radioCirculo").value;
    const area = areaCirculo(radio);
    alert("El area es: " + area);
}
