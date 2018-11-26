import {BaseDeDatos} from "../proyecto/main";

declare var require;
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Ingresar fotos',
        'Eliminar fotos',
        'Buscar fotos',
        'Modificar fotos',
    ]
};

const preguntaRegistroImagen = [
    {
        type: 'input',
        name: 'Nombre',
        message: 'Ingresar el nombre de la foto'
    },
    {
        type: 'input',
        name: 'Ubicacion',
        message: 'Ingresar ubicacion de la foto'
    },
    {
        type: 'input',
        name: 'Fecha',
        message: 'Ingresar la fecha de la captura'
    },
];

function main() {
    console.log('Empezo');



    // ------- 1) Si existe el archivo, leer, sino crear

    // ------- 2) Pregunto que quiere hacer -> Crear Borrar Actualizar Buscar

    // ------- 3) Preguntar los datos -> Datos nuevo Registro

    // ------- 4) Accion!

    // ------- 5) Guardar la Base de Datos

}

function inicializarBase() {

    const bddLeida$ = rxjs.from(leerBDD());

    return bddLeida$
        .pipe(
            mergeMap(  // Respuesta anterior Observable
                (respuestaBDD: RespuestaLeerBDD) => {
                    if (respuestaBDD.bdd) {
                        return rxjs
                            .of(respuestaBDD);
                    } else {
                        // crear la base

                        return rxjs
                            .from(crearBDD());
                    }

                }
            ),
        );
}

function leerBDD() {
    return new Promise(
        (resolve) => {
            fs.readFile(
                'bddFotos.json',
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
                        });
                    }
                }
            );
        }
    );
}

function crearBDD() {
    const contenido = '{"usuarios":[],"mascotas":[]}';
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                contenido,
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error al crear bdd',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD creada',
                            bdd: JSON.parse(contenido, )
                        });
                    }
                }
            );
        }
    );
}

function guardarBDD(bdd: BaseDeDatos) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                JSON.stringify(bdd, null, 2),
                (err) => {
                    if (err) {
                        reject({
                            mensaje: 'Error guardando la BDD',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD guardada',
                            bdd
                        });
                    }
                }
            );
        }
    );
}

function preguntarOpcionesMenu() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs
                .from(inquirer.prompt(preguntaMenu))
                .pipe(
                    map(
                        (opcionMenu: OpcionMenu) => {
                            respuesta.opcionMenu = opcionMenu;
                            return respuesta;
                        }
                    )
                ).pipe(
                    mergeMap(
                        (opcionMenu: OpcionMenu) => {
                            respuesta.opcionMenu = opcionMenu;
                            return respuesta;
                        }
                    )
                );
        }
    );
}

function preguntarDatos() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            switch (respuesta.opcionMenu.opcionMenu) {
                case 'Crear':
                    return rxjs
                        .from(inquirer.prompt(preguntaRegistroImagen))
                        .pipe(
                            map(
                                (foto: Foto) => {
                                    respuesta.foto = foto;
                                    return respuesta;
                                }
                            )
                        );

            }
        }
    );
}

function actualizarBDD() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs.from(guardarBDD(respuesta.bdd));
        }
    );
}


function ejecutarAccion() {
    return map(
        (respuesta: RespuestaLeerBDD) => {
            respuesta.bdd.usuarios.push(respuesta.foto);
            return respuesta;
        }
    );
}

function anadirFoto(foto) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);


                        bdd.usuarios.push(foto);


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Creado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}

function editarFoto(nombre, nuevoNombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);


                        const indiceFoto = bdd.usuarios
                            .findIndex(
                                (foto) => {
                                    return foto.nombre = nombre;
                                }
                            );

                        bdd.usuarios[indiceFoto].nombre = nuevoNombre;


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Editado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}

function buscarFotoPorNombre(nombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);

                        const respuestaFind = bdd.usuarios
                            .find(
                                (foto) => {
                                    return foto.nombre === nombre;
                                }
                            );

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

main();


interface RespuestaLeerBDD {
    mensaje: string;
    bdd?: BaseDeDatos;
    opcionMenu?: OpcionMenu;
    foto?: Foto;
}

export interface BaseDeDatos {
    imagenes: Foto[];
}

interface Foto {
    id: number;
    nombre: string;
}

interface preguntaRegistroImagen {
    Nombre: string;
    Ubicacion: string;
    Fecha: string;
}


interface OpcionMenu {
    opcionMenu:
        'Crear' |
        'Borrar' |
        'Actualizar' |
        'Buscar';
}












