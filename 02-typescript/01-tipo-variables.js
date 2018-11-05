// 01-tipo-variables.ts
//let edad:number | string = 13;
var variableLoca = '';
variableLoca = false;
//let nombre:string = 'Adrian';    NO ES NECESARIO
var nombre = 'Adrian';
//duck typing ->
//nombre = 13;
var casado = false;
var adrian = {
    nombre: 'Adrian',
    apellido: 'Salas'
};
var fechaNacimiento = new Date();
//Mediante la misma clase se tipean las instancias de  una clase
/*
let promesa:Promise<number> = ()=> {
    return new Promise(
        executor: (resolve,reject) => {
            resolve(1);
    };
    );
};
*/
console.log(adrian);
var numeros = [1, 2, 3, 4];
//Doc typing
function saludar(nombre, apellido) {
    var otrosNombres = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otrosNombres[_i - 2] = arguments[_i];
    }
    return '';
}
//Casteo de datos
//let respuestSaludar = <string> saludar(nombre:'',apellido='',otrosNombres='','','');
//respuestaSaludar = 1:
console.log();
//CLASE
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Usuario.prototype.saludar = function (nombre) {
        return nombre;
    };
    return Usuario;
}());
;
var adrianInstancia = new Usuario();
var UsuarioDummy = /** @class */ (function () {
    function UsuarioDummy() {
    }
    return UsuarioDummy;
}());
var vicente = {
    nombre: 'Vicente',
    apellido: 'Eguez'
};
