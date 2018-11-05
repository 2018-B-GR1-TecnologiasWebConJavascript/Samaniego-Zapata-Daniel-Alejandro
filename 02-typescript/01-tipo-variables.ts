
const edad:number = 13;
const nombre:string = 'Adrian';
const casado:boolean = 'false';
const adrian = {
    nombre: 'Adrian'
};
const numeros: number[] = [1, 2, 3, 4];


//let edad:number | string = 13;
//edad = 25;
edad = 'Nombre';

let variableLocal: any = '';
variableLocal = false;

let nombre = 'Adrian';
//duck typing ->
let casado: boolean = false;
let casado: false;
let casado: null;
casado = undefined;
let adrian: {   //Interface
    nombre: string;
}= {    // Jason
    nombre: 'Daniel'
    apellido: 'Sarzosa';
};
let fechaNacimiento: Date = new Date();
/*let promesa:Date Date = new Date();
    executor (resolce)
)
*/
adrian.nombre = 'Vicen'
console.log(adrian);
let numeros: number[] = [1, 2, 3, 4];

function saludar (nombre:string, // REQUERIDOS
                  apellido?: string, // OPCIONALES
                  ...otrosNombres: string[]): any{  //INFINITOS
    return '';
}



let respuestSaludar: number = <number> saludar(nombre: 'Vicente', apellido: 'Eguez', otrosNombres: '','','','');
respuestSaludar = 1;
//respuestSaludar = '';

const saludo = (nombre: string): number =>{
    return 1;
};

console.log();

// CLASE

class Usuario{
    public edad:string;
    nombre;  // Si se omite es publico y ANY
    constructor(){

    }
    saludar(nombre: string): string{
        return nombre;
    }
}
const adrianInstancia = new Usuario();

interface UsuarioInterface{
    nombre: string;
    apellido?: string;

}

class UsuarioDummy{
    nombre: string;
    apellido?: string;
}

const vicente: UsuarioDummy = {
    nombre: 'Vicente';
    apellido?: 'Eguez';
};