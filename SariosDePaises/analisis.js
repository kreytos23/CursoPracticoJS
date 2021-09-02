//utils
function esPar (numero)  {
    return numero % 2 === 0;
}

function mediaAritmetica (lista) {
    let promedio = lista.reduce( (valorPrevio, valorActual) => {
        return valorActual + valorPrevio;
    }) 
    return promedio / lista.length;
}

//Mediana General

const salariosColombia = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosColombia.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function medianaSalarios(lista) {
    const personaMitadPar = lista[parseInt(lista.length / 2)];

    if(esPar(lista.length)){
		const personaMitad1 = lista[(lista.length / 2) - 1];
		return mediaAritmetica([personaMitadPar, personaMitad1]);
    }else {
		return personaMitadPar;
	}
}

const medianaGeneral = medianaSalarios(salariosColSorted);

//Mediana del top 10%

const spliceStart = Math.round(salariosColSorted.length * 0.9);

const salariosColTop10 = salariosColSorted.slice(spliceStart);

console.log(salariosColSorted)

console.log({
	medianaGeneral,
	salariosColTop10,
});

