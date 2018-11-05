// 01-tipo-variables.ts

//let edad:number | string = 13;

let variableLoca: any ='';
variableLoca = false;

//let nombre:string = 'Adrian';    NO ES NECESARIO
let nombre = 'Adrian';
//duck typing ->
//nombre = 13;


let casado:boolean = false;

let adrian:{        //INTERFACE, sirve para definir el tipo de json
    nombre:string;
    apellido?:string; //? -> Señala que es del tipo opcional
} = {               //JSON
    nombre:'Adrian',
    apellido:'Salas'
};

let fechaNacimiento:Date = new Date();

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

let numeros:number[] = [1, 2, 3, 4];

//Doc typing
function saludar(
    nombre:string,
    apellido?:string,
    ...otrosNombres: string[]):string {
    return '';
}

//Casteo de datos
//let respuestSaludar = <string> saludar(nombre:'',apellido='',otrosNombres='','','');
//respuestaSaludar = 1:

console.log();

//CLASE

class Usuario{
    protected edad:string;
    nombre;
    constructor(){

    }
    saludar(nombre:string): string{
        return nombre;
    }
};

const adrianInstancia = new Usuario();


interface UsuarioInterface {
    nombre:string;
    apellido?:string;
}

class UsuarioDummy {
    nombre:string;
    apellido?:string
}

const vicente:UsuarioDummy = {
    nombre:'Vicente',
    apellido:'Eguez'
}
