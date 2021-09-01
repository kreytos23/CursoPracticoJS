function mediaAritmetica (lista) {
    let promedio = lista.reduce( (valorPrevio, valorActual) => {
        return valorActual + valorPrevio;
    }) 
    return promedio / lista.length;
}

function mediana (lista) {
    let valorMedio = lista[parseInt(lista.length / 2)]

    if(isEven(lista)){
        let valorMedio2 = lista[parseInt(lista.length / 2) - 1];
        return mediaAritmetica([valorMedio, valorMedio2])
    }else{
        return indiceMedio
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