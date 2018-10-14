//Int edad = 10; TIPADO

// NO TIPADO

var edad = 10;
edad = "10";
var sueldo =1.235;
edadString="10";


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

console.log("dato valor", dato); //undefined
console.log("dato tipo", typeof dato, ); //undefined
console.log("fechaNacimiento", typeof fechaNacimiento); //undefinid


console.log(daniel.nombre);  //Para imprimir un valor
console.log(daniel.mascotas);
console.log(daniel.mascotas.nombre);
console.log(daniel);
delete daniel.hijo;
console.log(daniel);
daniel.hija = 12323;
console.log(daniel);
daniel.hija = {
    nombre: '&&&'
};

console.log(daniel.abuelo.nombre);  //error

if(true){
    console.log("Si")
}else{
    console.log("No")
}
