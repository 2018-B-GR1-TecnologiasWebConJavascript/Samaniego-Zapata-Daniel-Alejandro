//JavaScript puede ejecutar funciones en cualquier estancia del codigo, ya sea antes de que se declare la funcion

holaMundo();

function holaMundo() {
    console.log("Hola Mundo");
}

//En JavaScript las funciones devuelven undefined o lo que tengan en el return

console.log(holaMundo());

function sumarDosNumeros(numeroUno, numeroDos)  {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';

    if (numeroUnoEsValido && numeroDosEsValido){
        return numeroUno + numeroDos;
    }  else {
        console.error('Parametros no son numeros')
        return 0;
    }
    return numeroUno + numeroDos;
}

console.log(sumarDosNumeros(1,2,3,4,5));

console.log(sumarDosNumeros(true ,0, [],3,4,5));

/*Los parametros que llegan a las funciones llegan como arreglos
function sumarNNumeros(...numeros) {//Destructuracion de argumentos
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido){
        return resultado.suma;
    } else {
        return 0;
    }
    //console.log(numeros);
}
function calcularResultadoSumarNNumeros (numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;
    for (var i=0; i< numeros.length; i++){
        numeroEsValido = typeof numeros[i] == 'number';
        if (numeroEsValido){
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
}
console.log(sumarNNumeros(true,1,2,3));
*/


//Javascript permite mandar funciones como parametros
function saludar(nombre, funcion) {
    //funcion();
    return `Hola ${funcion(nombre)}`;
}

console.log(saludar("aDrIaN", holaMundo)); //definicion de una funcion, sin ()

console.log(saludar("AdRian", nombreEnMayusculas));
console.log(saludar("AdRian", nombreEnMinusculas));
console.log(saludar("AdRian", nombreConPuntoAlFinal));

function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
}

function nombreEnMinusculas(nombre) {
    return nombre.toLowerCase();
}

function nombreConPuntoAlFinal(nombre) {
    return nombre + ".";
}

function restar(a,b) {
    return a - b;
}

console.log(restar(4,2));   // Ejecucion undefined
console.log(typeof restar); // Tipo Funcion
console.log(restar);        // Definicion de la funcion

//ANONYMOUS FUNCTION

function nombre() {}

//Funcion anonima dentro de una variable
var ejemplo = function (){}

//Igualar a una propiedad de un objeto
var adrian = {trabajo:function (){
        //Implementacion
    }}

adrian.trabajo()

// Usar dentro de arreglos
var arreglo = [ function () {
    //implementacion
}]

arreglo [0]();

//Enviar directamente la funcion como parametro
saludar("Maria", function (nombre) {
    return nombre + "Eguez";
});

//TIPOS DE VARIABLES

var variable; //Nunca mas


let variablesDos = 2;
variablesDos = 3; // = ... Puede ser igalada a otra cosa

const edad = 29; //Siempre que se pueda usar esta, amenos que se necesite de una reasignacion
// edad = 30;

const vicente = {
    nombre:'Vicente'
}

vicente.nombre = 'Washo';
vicente.isPrototypeOf();
vicente.hasOwnProperty();
/*vicente = {
    algo:mas
}*/

//Si se puede usar funciones en la variable de tipo contaste
const
    arregloUnoDos =[1,2];

arregloUnoDos[0] = 3;
arregloUnoDos.push(3);


//arregloUnoDos = [1,2,3,4];

const nombre = 'Adrian';
//nombre = 'Vicente';

const casado = true;
// casado = false;

const hijos = null;
// hijos = 1;

const ganarDinero = function () {
    return 1;
}

/* ganarDinero() = function () {
    return 2;
} */

// NUNCA VAMOS A USAR LAS FUNCIONES ANONIMAS

const elevarAlCuadrado = function (numero) {
    return numero * numero;
}

// FAT ARROW FUNCTION  ->   =>

const elevarAlCuadrado = (numero) => {
    return numero * numero;
}

// Si se tiene una sola linea se puede omitir las llaves, return y parentesis.

const elevarAlCuadradoV2 = (numero) => numero * numero;

const elevarAlCuadradoV3 = numero => numero * numero;

const restarDosNumeros = (numUno,numDos) => numUno - numDos;