//import {pipe} from "rxjs";
declare var require;
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');    // npm install rxjs
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;


/*
map(  // MODIFICA ALTERA ARREGLO -> NUEVO ARREGLO
    ()=>{
        return {}
    }
)
*/
const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Actualizar',
    ]
};

const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre'
    },
];

const preguntaUsuarioBusquedaPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del usuario a buscar'
    }
];


const preguntaUsuarioNuevoNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe tu nuevo nombre'
    }
];


function main() {

    console.log('Empezo');

    inicializarBase()
        .pipe(
            preguntarOpcinesMenu()
 ,

            mergeMap(
                (respuesta: RespuestaLeerBDD) => {
                    return rxjs.from(guardarBDD());
                }
            )
        )
        .subscribe(
            (respuesta) => {
                console.log(respuesta);
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log('complete');
                main();
            }
        );


    // ------- 1) Si existe el archivo, leer, sino crear

    // ------- 2) Pregunto que quiere hacer -> Crear Borrar Actualizar Buscar

    // ------- 3) Preguntar los datos -> Datos nuevo Registro

    // ------- 4) Accion!

    // ------- 5) Guardar la Base de Datos


    /*
    try {
        await inicializarBase();
        const respuesta = await inquirer.prompt(preguntaMenu);
        switch (respuesta.opcionMenu) {
            case 'Crear':

                const respuestaUsuario = await inquirer.prompt(preguntaUsuario);
                await anadirUsuario(respuestaUsuario);
                main();
                break;

            case 'Actualizar':

                const respuestaUsuarioBusquedaPorNombre = await inquirer.prompt(preguntaUsuarioBusquedaPorNombre);

                const existeUsuario = await buscarUsuarioPorNombre(respuestaUsuarioBusquedaPorNombre.nombre);

                if (existeUsuario) {
                    const respuestaNuevoNombre = await inquirer.prompt(preguntaUsuarioNuevoNombre);
                    await editarUsuario(respuestaUsuarioBusquedaPorNombre.nombre, respuestaNuevoNombre.nombre);
                } else {
                    console.log('El usuario no existe');

                    main();
                    break;
                }


        }
    } catch (e) {
        console.log('Hubo un error');
    }
    */
}

function inicializarBase() {

    const bddLeida$ = rxjs.from(leerBDD());

    return bddLeida$
        .pipe(

        );

    /* (resolve, reject) => {

     };*/

}

function leerBDD() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'bdd.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        resolve({
                            mensaje: 'No existe la Base de Datos',
                            bdd: null
                        });
                    } else {
                        resolve({
                            mensaje: 'Base de datos leida',
                            bdd: JSON.parse(contenidoArchivo)
                        })
                    }
                }
            )
        }
    );
}

function crearBDD() {
    const contenido = '{"usuarios":[], "mascotas":[]}';
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                contenido,
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error crror creando bdd',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD creada',
                            bdd: JSON.parse(contenido)   //String a Objeto
                        });
                    }
                }
            );
        });
}

function guardarBDD(bdd:BaseDeDatos){
    return new Promise(
        (resolve, reject) =>{
            fs.writeFile(
                'bdd.json',
                JSON.stringify(bdd),
                (err)=>{
                    if(err){
                        reject ({
                            mensaje: 'Error al guardar la BDD',
                            error: 500
                        })
                    } else {
                        resolve({
                            mensaje: 'BDD guardada',
                            bdd
                        })
                    }
                }
            )
        }
    )
}

function preguntarOpcinesMenu(){
    return             mergeMap(       //respuesta del anterior observable
        (respuestaBDD: RespuestaLeerBDD) => {
            if (respuestaBDD.bdd) {
                //devuelvo lo mismo
                return rxjs.of(respuestaBDD);
            } else {
                // crear la BDD
                return rxjs.from(crearBDD());
                // Devolvemos otro observable
                /*
                .pipe(
                    map(
                        (respuestCrear: RespuestaLeerBDD)=>{
                            return{}
                        }
                    )
                )*/
            }
        }
    )
}

function preguntarDatos(){
    return            map(
        (respuesta: RespuestaLeerBDD) => {
            repuesta.bdd.usuarios.push(respuesta.usuario);
        }
    ),
}

main();

interface RespuestaLeerBDD{
    mensaje: string;
    bdd?: BaseDeDatos;
    opcionMenu?: OpcionMenu;
    usuario?: Usuario;
}

interface LeerBDD {
    mensaje: string;
    bdd: BaseDeDatos;
}

export interface BaseDeDatos {
    usuarios: Usuario[];
    mascotas: Mascota[];
}

interface Usuario {
    id: number;
    nombre: string;
}

interface Mascota {
    id: number;
    nombre: string;
    idUsuario: number;
}

interface OpcionMenu {
    opcionMenu:
        'Crear' |
        'Borrar' |
        'Actualizar' |
        'Buscar';
}



