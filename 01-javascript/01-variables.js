//Int edad = 10; TIPADO

// NO TIPADO

var edad = 10;
var edadString = "10";
var sueldo = 1.235;
var casado = false;
var hijos = null;
var dato;
var fechaNacimiento = new Date();

var daniel = {
    "nombre": "Daniel",
    'segundoNombre': 'Alejo',
    apellidoPaterno: `Samaniego`,
    apellidoMaterno: 'Zapata',
    edad: 26,
    casado: false,
    hijo: null,
    mascotas: {
        nombre: "Cachetes"
    }
}// object

console.log("Hola Mundo");

console.log("edad", typeof edad);           // number
console.log('edadString', typeof edadString);     // String
console.log('sueldo', typeof sueldo);        // number
console.log('casado', typeof casado);       // boolean
console.log("hijos", typeof hijos);         // object

console.log("dato valor", dato);            //undefined
console.log("dato tipo", typeof dato,);     //undefined
console.log("fechaNacimiento", typeof fechaNacimiento); //undefinid


console.log(daniel.nombre);  //Para imprimir un valor
console.log(daniel.mascotas);
console.log(daniel.mascotas.nombre);
console.log(daniel);
delete daniel.hijo;      //borrar
console.log(daniel);
//daniel.hija = 12323;    //agregar números
console.log(daniel);
daniel.hija = {
    nombre: '&&&'
}; //agregar un objeto

//console.log(daniel.abuelo.nombre);  //error

console.log(daniel.hija);

if (true) {
    console.log("Si") //Se imprime
} else {
    console.log("No")
}


if (false) {
    console.log("Si")
} else {
    console.log("No")  // Se imprime
}

if (1) {    // Truthy
    console.log("Si")   // Se imprime
} else {
    console.log("No")
}

if (0) {    // Falsy
    console.log("Si")
} else {
    console.log("No")      //Se imprime
}

if (-1) {   // Truthy
    console.log("Si")   // se imprime
} else {
    console.log("No")
}

if ("") {       // Un STRING vacío es Falsy
    console.log("Si")
} else {
    console.log("No")
}

if ("a") {  // Un STRING lleno es Truthy
    console.log("Si")
} else {
    console.log("No")
}

if (null) {     // Falsy
    console.log("Si")
} else {
    console.log("No")   // se imprime
}

if ({}) {  // Con un OBJETO VACÏO es Truthy
    console.log("Si")
} else {
    console.log("No")
}

if ({nombre:'daniel'}) {  // Con un OBJETO LLENO es Truthy
    console.log("Si")
} else {
    console.log("No")
}

if (new Date()) {  //Truthy
    console.log("Si")
} else {
    console.log("No")
}

if (undefined) {  // Falsy
    console.log("Si")
} else {
    console.log("No")
}