declare var require;
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Escoja una opción: ',
    choices: [
        'Ingresar Foto',
        'Borrar Foto',
        'Buscar Foto',
        'Actualizar Foto',
    ]
};
const ingresarFotos = [{
    name: 'nombre',
    type: 'input',
    message: 'Ingrese el nombre de la Foto: '
},{
    name: 'ubicacion',
    type: 'input',
    message: 'Ingrese la ubicacion de la foto: '
},{
    name: 'fecha',
    type: 'input',
    message: 'Ingrese la fecha de la captura (dd/mm/yyyy): '
}];


const preguntaBuscarFoto = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Ingrese el nombre de la foto: ',
    }
];


const preguntaEdicionFoto = [{
    name: 'nombre',
    type: 'input',
    message: 'Ingrese el nuevo nombre de la foto: '
}, {
    name: 'ubicacion',
    type: 'input',
    message: 'Ingrese la nueva ubicacion de la foto: '
}, {
    name: 'fecha',
    type: 'input',
    message: 'Ingrese la nueva fecha de captura de la foto: '
}];

function inicialiarBDD() {

    // @ts-ignore
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'bdd.json',
                'utf-8',
                (error, contenidoArchivo) => { // CALLBACK
                    if (error) {

                        fs.writeFile(
                            'bdd.json',
                            '{"fotos":[]}',//
                            (error) => {
                                if (error) {
                                    reject({
                                        mensaje: 'Error creando',
                                        error: 500
                                    })
                                } else {
                                    resolve({
                                        mensaje: 'BDD leida',
                                        bdd: JSON.parse('{"fotos":[]}')
                                    })
                                }

                            }
                        )

                    } else {
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse(contenidoArchivo)
                        })
                    }
                }
            )
        }
    );

}
function main() {
    const respuestaBDD$ = rxjs.from(inicialiarBDD());
    respuestaBDD$
        .pipe(
            preguntarOpcionesMenu(),
            opcionesRespuesta(),
            ejecutarAcccion(),
            guardarBaseDeDatos()
        )
        .subscribe(
            (data:RespuestaBDD) => {
                //
                console.log("\n*************Base Final de Fotos*****************\n");
                console.log(data.bdd.fotos)
            },
            (error) => {
                //
                console.log(error);
            },
            () => {
                main();
                console.log('Complete');
            }
        )



}
function guardarBDD(bdd: BDD) {
    // @ts-ignore
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                JSON.stringify(bdd),
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando',
                            error: 500
                        })
                    } else {
                        resolve({
                            mensaje: 'BDD guardada',
                            bdd: bdd
                        })
                    }

                }
            )
        }
    )
}
function preguntarOpcionesMenu() {
    return mergeMap(
        (respuestaBDD: RespuestaBDD) => {
            return rxjs.from(inquirer.prompt(preguntaMenu)).pipe(
                map(
                    (respuesta: OpcionMenu) => {
                        respuestaBDD.opcionMenu = respuesta;
                        return respuestaBDD
                    }
                )
            );

        }
    )
}
function opcionesRespuesta() {
    return mergeMap(
        (respuestaBDD: RespuestaBDD) => {
            const opcion = respuestaBDD.opcionMenu.opcionMenu;

            switch (opcion) {
                case 'Ingresar Foto':
                    return rxjs.from(inquirer.prompt(ingresarFotos))
                        .pipe(
                            map(
                                (foto: Fotos) => { // resp ant OBS
                                    respuestaBDD.foto = foto;
                                    return respuestaBDD;
                                }
                            )
                        );
                case 'Borrar Foto':
                    return borrarFoto(respuestaBDD);
                    break;
                case 'Buscar Foto':
                    return buscarFoto(respuestaBDD);
                    break;
                case 'Actualizar Foto':
                    return preguntarNombre(respuestaBDD);
            }
        }
    )
}
function guardarBaseDeDatos() {
    return mergeMap(// Respuesta del anterior OBS
        (respuestaBDD: RespuestaBDD) => {
            // OBS
            return rxjs.from(guardarBDD(respuestaBDD.bdd))
        }
    )
}

function ejecutarAcccion() {
    return map( // Respuesta del anterior OBS
        (respuestaBDD: RespuestaBDD) => {
            const opcion = respuestaBDD.opcionMenu.opcionMenu;
            switch (opcion) {
                case 'Ingresar Foto':
                    const foto = respuestaBDD.foto;
                    respuestaBDD.bdd.fotos.push(foto);
                    return respuestaBDD;
                case 'Actualizar Foto':
                    const indice = respuestaBDD.indiceFoto;
                    respuestaBDD.bdd.fotos[indice].nombre = respuestaBDD.foto.nombre;
                    respuestaBDD.bdd.fotos[indice].ubicacion = respuestaBDD.foto.ubicacion;
                    respuestaBDD.bdd.fotos[indice].fecha = respuestaBDD.foto.fecha;
                    return respuestaBDD;
                case 'Borrar Foto':
                    return respuestaBDD;
                case 'Buscar Foto':
                    return respuestaBDD;
            }
        }
    )
}

function preguntarNombre(respuestaBDD: RespuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarFoto))
        .pipe(
            mergeMap( // RESP ANT OBS
                (respuesta: BuscarFotoPorNombre) => {
                    const indiciFoto=respuestaBDD.bdd.fotos
                        .findIndex( // -1
                            (foto) => {
                                return foto.nombre === respuesta.nombre
                            }
                        );
                    if (indiciFoto === -1) {
                        console.log('*************************');
                        return preguntarNombre(respuestaBDD);
                    } else {
                        console.log(indiciFoto);
                        respuestaBDD.indiceFoto = indiciFoto;
                        return rxjs.from(inquirer.prompt(preguntaEdicionFoto))
                            .pipe(
                            map(
                                (respuesta: Fotos)=>{
                                    respuestaBDD.foto ={
                                        nombre: respuesta.nombre,
                                        ubicacion: respuesta.ubicacion,
                                        fecha: respuesta.fecha
                                    };
                                    return respuestaBDD;
                                }
                            )
                        );
                    }
                }
            )
        );
}

function borrarFoto(respuestaBDD: RespuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarFoto))
        .pipe(
            mergeMap( // RESP ANT OBS
                (respuesta: BuscarFotoPorNombre) => {
                    const indiceFoto = respuestaBDD.bdd
                        .fotos
                        .findIndex( // -1
                            (foto: any) => {
                                return foto.nombre === respuesta.nombre
                            }
                        );
                    if (indiceFoto === -1) {
                        console.log('Borrar****************');
                        return preguntarNombre(respuestaBDD);
                    } else {
                        console.log(indiceFoto);
                        return rxjs.from(promesaEliminar(respuestaBDD.bdd.fotos,indiceFoto))
                            .pipe(
                            map(() =>{
                                    return respuestaBDD
                                }
                            )
                        )
                    }
                }
            )
        );
}

function buscarFoto(respuestaBDD: RespuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarFoto))
        .pipe(
            mergeMap(
                (respuesta: BuscarFotoPorNombre) => {
                    const indiceFoto = respuestaBDD.bdd.fotos
                        .findIndex( // -1
                            (foto) => {
                                return foto.nombre === respuesta.nombre
                            }
                        );
                    if (indiceFoto === -1) {
                        console.log('Buscar***********');
                        return preguntarNombre(respuestaBDD);
                    } else {
                        return rxjs.from(promesaBuscar(respuestaBDD.bdd.fotos[indiceFoto])
                        ).pipe(
                            map(() =>{
                                    return respuestaBDD
                                }
                            )
                        )
                    }
                }
            )
        );
}

const promesaBuscar = (respuestaBDD) =>{
    return new Promise(
        (resolve) => {
            const resultado = {
                respuesta: respuestaBDD
            };
            console.log('\nRespuesta:\n', respuestaBDD);
            resolve(resultado)
        }
    )};
const promesaEliminar = (respuestaBDD,indiceProducto) =>{
    return new Promise(
        (resolve) => {
            resolve(respuestaBDD.splice(indiceProducto, 1))
        }
    )};
main()

interface RespuestaBDD {
    mensaje: string;
    bdd: BDD;
    opcionMenu?: OpcionMenu;
    indiceFoto?: number;
    foto?: Fotos;
}

export interface BDD {
    fotos: Fotos[] | any ;
}

interface Fotos {
    nombre: string;
    ubicacion: string;
    fecha: string;
}

interface OpcionMenu {
    opcionMenu: 'Ingresar Foto' | 'Borrar Foto' | 'Buscar Foto' | 'Actualizar Foto';
}

interface BuscarFotoPorNombre {
    nombre: string;
}


