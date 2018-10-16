var arreglo = [];

var arregloNumeros = [1, 2, 3];

//acceso
console.log(arreglo[3]);

arregloNumeros.push(4);

console.log(arregloNumeros);

arregloNumeros.pop(); //Si se manda pop sin numero este sacara automaticamente el ultimo numero

console.log(arregloNumeros);


//SPLICE BORRAR

arregloNumeros.splice(0,2);

console.log(arregloNumeros);

//Primer difito posicion

//del tercero en adelante son los elementos que se van agregar.

arregloNumeros.splice(1,0,4,5,6,7,8,9);

console.log(arregloNumeros);

// Eliminar el #6

var indiceNumeroSeis = arregloNumeros.indexOf(6);

arregloNumeros.splice(indiceNumeroSeis,1);

console.log(arregloNumeros);


// Para dividir arreglos
// [0,10] cerrado esta incluido el 10
// [0,10[ Abierto esta excluido el 10

var arregloUno = arregloNumeros.slice(0,2);
var arregloDos = arregloNumeros.slice(3,6);

var arregloUnoDos = [1, 2];
var arregloSeis = [6];


// DESTRUCTURACION de arrelgos
var arregloTotal = [];
console.log(...arregloUnoDos);
console.log(1, 2);

var arregloTotal = [...arregloUnoDos, ...arregloUno, ...arregloSeis, ...arregloDos];
console.log(arregloTotal);

var arregloSiguientesNumeros = [10,11,12,13,14,15,16,17,18,19];

arregloTotal.splice(arregloTotal.length, 0, ...arregloSiguientesNumeros);
console.log(arregloTotal);
//arregloDos.push(7);
//var indiceSiete = arregloDos.indexOf(7);

//console.log(arregloUno);
//console.log(arregloDos);
//console.log(indiceSiete);

//Destructuracion de objetos

var vicente = {
    nombre: "Vicente",
    apellidoPaterno: "Eguez"
};

var eguez = {
    sueldo: 1.10
};

var adrian = {
    edad: 10,
    casado: false,
    hijos: null,
    mascota: {
        nombre: "Cachetes"
    }
};


var vicenteAdrianEguez = {
    ...vicente,
    ...eguez,
    ... adrian,
   // sueldo: 2.10  si hay dos variables con el mismo nombre coge la ultima instanciada
};

console.log(vicenteAdrianEguez);
