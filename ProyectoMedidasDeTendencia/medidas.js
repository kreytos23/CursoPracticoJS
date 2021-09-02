function mediaAritmetica (lista) {
    let promedio = lista.reduce( (valorPrevio, valorActual) => {
        return valorActual + valorPrevio;
    }) 
    return (promedio / lista.length).toFixed(2);
}

function mediana (lista) {
    let valorMedio = lista[parseInt(lista.length / 2)]

    if(isEven(lista)){
        let valorMedio2 = lista[parseInt(lista.length / 2) - 1];
        return mediaAritmetica([valorMedio, valorMedio2])
    }else{
        return valorMedio
    }
}

function isEven(lista) {
    if(lista.length % 2 === 0){
        return true
    }else{
        return false
    }
}

function moda(arr) {
    return [...arr].sort
    ( (a, b) =>
        arr.filter((v) => v === a).length  - arr.filter((v) => v === b).length
    )
    .pop();
}

//DOM 
const results = document.getElementById("final");

function getList (){
    const inputValues = document.getElementById("valoresComa").value;
    let values = inputValues.toString().split(",").map(
            (value) => parseInt(value)
        );
        return values;
}

function getMedia (){
    const values = getList();
    const resultado = mediaAritmetica(values);
    results.innerText = resultado;
}


function getMediana (){
    const values = getList();
    const resultado = mediana(values);
    results.innerText = resultado;
}


function getModa (){
    const values = getList();
    const resultado = moda(values);

    results.innerText = resultado;
}
