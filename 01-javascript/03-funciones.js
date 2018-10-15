//holaMundo();

function holamundo(){
    console.log("Hola Mundo");
}

console.log("Hola Mundo");

function sumarDosNumeros(numeroUno, numeroDos){
    //return"";
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';
    if(numeroUnoEsValido && numeroDosEsValido){
        return numeroUno + numeroDos;
    } else{
        console.error('Parametros no son numeros');
        return 0;
    }
}

console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6, 7)); //3

console.log(sumarDosNumeros(true, 0, undefined, null, "asd", 6, 7)); //3

//Destructuracion
//function sumarNNumeros(...numeros){
//    console.log(numeros);
//}

//console.log(sumarNNumeros(1,2,3,4,5,6));
function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

function sumarNNumeros(...numeros){
    var suma = 0;
    var todoLosNumerosSonValidos = true;
    for(var i=0; i < numeros.length; i++){
        var numeroEsValido = typeof numeros[i] == 'number';
        if(numeroEsValido){
            suma = suma + numeros[i];
        } else {
            todoLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todoLosNumerosSonValidos
    };
    return resultado;
}
console.log(sumarNNumeros(true, 1,2,3));

// Utilizar variables dentro de esas comillas raras ``
function saludar(nombre, funcion){
    //funcion();
    //return `Hola ${nombre.toUpperCase()}`;
    return `Hola ${funcion(nombre)}`;
}

console.log(saludar("adrian", holamundo));

function nombreEnMayusculas(nombre){
    return nombre.toUpperCase();
}

function nombreEnMinusculas(nombre){
    return nombre.toLowerCase();
}

function nombreConPuntoAlFinal(nombre){
    return nombre + ".";
}

console.log(saludar("adrian", nombreEnMayusculas));
console.log(saludar("adrian", nombreEnMinusculas));
console.log(saludar("adrian", nombreConPuntoAlFinal));

var arreglo = [1,2,3];

arreglo.findIndex(
    function(valorDelArreglo,indice,arreglo){
        return 2;
    }
); //1