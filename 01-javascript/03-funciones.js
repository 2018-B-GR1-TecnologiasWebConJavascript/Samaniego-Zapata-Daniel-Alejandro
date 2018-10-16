// Javascript puede ejecutar funciones en cualquier estancia del codigo,
//ya sea antes de que se declare la funcion

holaMundo();

function holaMundo() {
    console.log("Hola Mundo");
}


// En javascript las funciones devuelven undifined o lo que tengan en el return

console.log(holaMundo());

function sumaDosNumeros(numeroUno, numeroDos) {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';

    if(numeroUnoEsValido && numeroDosEsValido){
        return numeroUno + numeroDos;
    } else {
        console.error('Parametros no son numeros')
        return 0;
    }
    return numeroUno + numeroDos;
}

console.log(sumaDosNumeros(1,2,3,4,5));

console.log(sumaDosNumeros(true, 0, undefined, null, "asd", 3,4,5)); //3

// Los parametros que llegan a las funciones llegan con arreglos


function sumarNNumeros(...numeros){

// Destructuracion de argumentos

    var resultado = calcularResultadoSumarNNumeros(numeros);

    if(resultado.esValido){
        return resultado.suma;
    } else {
        return 0;
    }
    //console.log(numeros);
}


function calcularResultadoSumarNNumeros(numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;

    for(var i=0; i < numeros.length; i++){
        var numeroEsValido = typeof numeros[i] == 'number';
        if(numeroEsValido){
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado;
}

console.log(sumarNNumeros(true, 1, 2, 3));

function saludar(nombre, funcion) {
    //funcion();
    return `Hola ${funcion(nombre)}`;
}


console.log(saludar("aDrIaN", holaMundo)); //definicion de una funcion sin ()

console.log(saludar("AdRian", nombreEnMayusculas));
console.log(saludar("AdRian", nombreEnMinusculas));
console.log(saludar("AdRian", nombreConPuntoAlFinal));

function nombreEnMayusculas(nombre){
    return nombre.toUpperCase();
}

function nombreEnMinusculas(nombre){
    return nombre.toLowerCase();
}

function nombreConPuntoAlFinal(nombre){
    return nombre + ".";
}

var arreglo = [1, 2, 3, 1, 1];

arreglo.findIndex(
    function (valorDelArreglo, indice, arreglo){
        return 2;
    }
); //1

//15.10.2018

