var arreglo = [];

arreglo = [
    1,
    "Adrian",
    false,
    null,
    new Date(),
    {
        nombre: "Samaniego"
    },
    [1, 2, false, true]
];

console.log(arreglo);

arreglo.push(3);

console.log(arreglo);

arreglo.pop();

console.log(arreglo);

var arregloNumeros = [1, 2, 3, 4, 5];

//acceso
console.log(arregloNumeros);

arregloNumeros.push(8);

console.log(arregloNumeros);


//SPLICE BORRAR

arregloNumeros.splice(1, 0, 1.1);   // Ingreso un elemento en la posicion 1 y vamos a borrar 0 elementos y el numero a ingresar es 1.1

console.log(arregloNumeros);

//Primer defino posicion, luego cuantos se van a eliminar

//del tercero en adelante son los elementos que se van agregar.

//arregloNumeros.splice(1,0,4,5,6,7,8,9);

//console.log(arregloNumeros);

// Eliminar el #2

var indiceNumeroDos = arregloNumeros.indexOf(2);

console.log(indiceNumeroDos);

arregloNumeros.splice(indiceNumeroDos, 0, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9);

console.log(arregloNumeros);

var indiceUnoSiete = arregloNumeros.indexOf(1.7);

console.log(arregloNumeros[indiceUnoSiete]);  //1.7

console.log(arregloNumeros[0]);  // Valor de la posicion 0

var posicionInicialUnoUno = arregloNumeros.indexOf(1.1);
var posicionInicialUnoNueve = arregloNumeros.indexOf(1.9);

var desdeElUnoUnoAlUnoNueve = (
    posicionInicialUnoNueve - posicionInicialUnoUno) +1;

var arregloArgumentos = [posicionInicialUnoUno,
    desdeElUnoUnoAlUnoNueve];

arregloNumeros.splice(...arregloArgumentos);

console.log(arregloNumeros);


// Para dividir arreglos
// [0,10] cerrado esta incluido el 10
// [0,10[ Abierto esta excluido el 10

//var arregloUno = arregloNumeros.slice(0, 2);
//var arregloDos = arregloNumeros.slice(3, 6);

var arregloUno = [1, 2, 3];
var arregloDos = [4, 5, 6];


// DESTRUCTURACION de arrelgos

console.log(1, 2, 3);
console.log(...arregloUno);

var arregloCompleto = [...arregloUno, ...arregloDos];

console.log(arregloCompleto);
/*
var arregloTotal = [...arregloUnoDos, ...arregloUno, ...arregloSeis, ...arregloDos];
console.log(arregloTotal);

var arregloSiguientesNumeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

arregloTotal.splice(arregloTotal.length, 0, ...arregloSiguientesNumeros);
console.log(arregloTotal);
//arregloDos.push(7);
//var indiceSiete = arregloDos.indexOf(7);
*/
//console.log(arregloUno);
//console.log(arregloDos);
//console.log(indiceSiete);

//Destructuracion de objetos

var adrian = {
    edad: 10,
    casado: false,
    hijos: null,
    mascota: {
        nombre: "Cachetes"
    }
};

var vicente = {
    nombre: "Vicente",
    apellidoPaterno: "Eguez",
    fechaNacimiento: new Date('1986-05-10')
};

var eguez = {
    sueldo: 1.10
};


var vicenteAdrianEguez = {
    ...adrian
}

var datosUsuario = {
    ...vicente,
    ...eguez,
    ...adrian,
    // sueldo: 2.10  si hay dos variables con el mismo nombre coge la ultima instanciada
};

console.log(vicenteAdrianEguez);

console.log('*************');

console.log(datosUsuario);

console.log('*************');


//Objetos

var atributosDelObetjo = Object.keys(datosUsuario);

console.log(atributosDelObetjo);

console.log('*************');

console.log(datosUsuario['nombre']);

console.log(datosUsuario[atributosDelObetjo[1]]); //Posicion uno que es Eguez
