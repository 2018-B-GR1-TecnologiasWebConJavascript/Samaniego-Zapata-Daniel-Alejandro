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

function restar (a, b){
    return a-b;
}

console.log(restar(4, 2)); //Ejecucion 2
console.log(typeof restar);    //Tipo funcion = function
console.log(restar);  //DEFINICION DE LA FUNCION

// Anonymous function

function nombre(){

}
var ejemplo = function nombreDos() {};    // funcion anonima

var adrian = {
    trabajo: function(){
        //implementacion
    }
};
adrian.trabajo();

var arreglo = [
    function () {
            //implememtacion
    }
];
arreglo[0]();


saludar("Maria", function (nombre){
    return nombre + "Eguez"
});


//  TIPOS DE VARIABLES

var variable; //nunca màs escribir

let variablesDos = 2;   //
variableDos = 3;    //Puedo reasignarle

const edad = 29;  //No puede ser reasignada .... SIEMPRE QUE SE PUEDA USAR
// edad = 30

const vicente = {
    nombre: 'Vicente'
};
vicente.nombre = 'Adrian';
/*vicente = {
    algo:'mas'
};*/
vicente.isPrototypeOf();
vicente.hasOwnProperty();

const arregloUnoDos = [1,2];
arregloUnoDos[0] = 3;
//arregloUnoDos = [1,2,3,4,5];

const Nnombre = 'Adrian';
//nombre = 'Vicente';

const casado = true;
//casado = false;

const hijos = null;
//hijos = 1;

/*const ganarDinero = function () {
    return 2;
};
*/

// NUNCA VAMOS A USAR FUNCIONES ANÒNIMAS

const elevarAlCuadrado = (numero) => {
    return numero * numero;
};

//Closher es donde yo puedo usar alas variables

//FAT ARROW FUNCTION   ->      =>
//o FUNCIONES DE FLECHA GORDA   .... VARIABLES, OBJETOS,
// PARAMETROS DE FUNCIONES Y EN UN ARREGLO SE PUEDE USAR
//FUNCIONES ANONIMAS

const elevarAlCuadradoV2 = (numero) => numero * numero;

const elevarAlCuadradoV3 = numero => numero * numero;

const restarDosNumeros = (numUno, numDos) => numUno - numDos;