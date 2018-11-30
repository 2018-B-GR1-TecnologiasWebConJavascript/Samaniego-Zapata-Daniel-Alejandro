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
        'Ingresa Foto',
        'Borrar Foto',
        'Buscar Foto',
        'Actualizar Foto',
    ]
};
const ingresarFotos = [{
        name: 'nombre',
        type: 'input',
        message: 'Ingrese el nombre de la Foto: '
    }, {
        name: 'ubicacion',
        type: 'input',
        message: 'Ingrese la ubicacion de la foto: '
    }, {
        name: 'fecha',
        type: 'input',
        message: 'Ingrese la fecha de la captura (dd/mm/yyyy): '
    }];
// const ingresarProductos = [{
//     name: 'nombre',
//     type: 'input',
//     message: 'Ingrese el nombre del producto: '
// },{
//     name: 'categoria',
//     type: 'input',
//     message: 'Ingrese la categoria del producto: '
// },{
//     name: 'precio',
//     type: 'input',
//     message: 'Ingrese el precio del producto: '
// }];
const preguntaBuscarFoto = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Ingrese el nombre de la foto: ',
    }
];
// const preguntaBuscarProducto = [
//     {
//         type: 'input',
//         name: 'nombre',
//         message: 'Ingrese el nombre del producto',
//     }
// ];
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
// const preguntaEdicionProducto = [{
//     name: 'nombre',
//     type: 'input',
//     message: 'Ingrese el nuevo nombre del producto: '
// }, {
//     name: 'categoria',
//     type: 'input',
//     message: 'Ingrese la nueva categoria del producto: '
// }, {
//     name: 'precio',
//     type: 'input',
//     message: 'Ingrese el nuevo precio del producto: '
// }];
function inicialiarBDD() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                fs.writeFile('bdd.json', '{"fotos":[]}', //'{"productos":[]}',
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando',
                            error: 500
                        });
                    }
                    else {
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse('{"fotos":[]}') // bdd: JSON.parse('{"productos":[]}')
                        });
                    }
                });
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
function main() {
    const respuestaBDD$ = rxjs.from(inicialiarBDD());
    respuestaBDD$
        .pipe(preguntarOpcionesMenu(), opcionesRespuesta(), ejecutarAcccion(), guardarBaseDeDatos())
        .subscribe((data) => {
        //
        console.log("\n*************Base Final*****************\n");
        console.log(data.bdd.fotos); //console.log(data.bdd.productos)
    }, (error) => {
        //
        console.log(error);
    }, () => {
        main();
        console.log('Complete');
    });
}
function guardarBDD(bdd) {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', JSON.stringify(bdd), (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD guardada',
                    bdd: bdd
                });
            }
        });
    });
}
function preguntarOpcionesMenu() {
    return mergeMap((respuestaBDD) => {
        return rxjs.from(inquirer.prompt(preguntaMenu)).pipe(map((respuesta) => {
            respuestaBDD.opcionMenu = respuesta;
            return respuestaBDD;
        }));
    });
}
function opcionesRespuesta() {
    return mergeMap((respuestaBDD) => {
        const opcion = respuestaBDD.opcionMenu.opcionMenu;
        switch (opcion) {
            case 'Ingresar Foto': //case '1.- Crear Producto':
                return rxjs
                    .from(inquirer.prompt(ingresarFotos)) //.from(inquirer.prompt(ingresarProductos))
                    .pipe(map((foto) => {
                    respuestaBDD.foto = foto; //respuestaBDD.producto = producto;
                    return respuestaBDD;
                }));
            case 'Borrar Foto':
                return borrarFoto(respuestaBDD);
                break;
            case 'Buscar Foto':
                return buscarFoto(respuestaBDD);
                break;
            case 'Actualizar Foto':
                return preguntarNombre(respuestaBDD);
            // case '3.- Buscar Producto':
            //     return buscarProducto(respuestaBDD);
            //     break;
            // case '4.- Actualizar Producto':
            //     return preguntarNombre(respuestaBDD);
            // case '2.- Borrar Producto':
            //     return borrarProducto(respuestaBDD);
            //     break;
        }
    });
}
function guardarBaseDeDatos() {
    return mergeMap(// Respuesta del anterior OBS
    (respuestaBDD) => {
        // OBS
        return rxjs.from(guardarBDD(respuestaBDD.bdd));
    });
}
function ejecutarAcccion() {
    return map(// Respuesta del anterior OBS
    (respuestaBDD) => {
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
    });
}
// function ejecutarAcccion() {
//     return map( // Respuesta del anterior OBS
//         (respuestaBDD: RespuestaBDD) => {
//             const opcion = respuestaBDD.opcionMenu.opcionMenu;
//             switch (opcion) {
//                 case '1.- Crear Producto':
//                     const producto = respuestaBDD.producto;
//                     respuestaBDD.bdd.productos.push(producto);
//                     return respuestaBDD;
//                 case '4.- Actualizar Producto':
//                     const indice = respuestaBDD.indiceUsuario;
//                     respuestaBDD.bdd.productos[indice].nombre = respuestaBDD.producto.nombre;
//                     respuestaBDD.bdd.productos[indice].categoria = respuestaBDD.producto.categoria;
//                     respuestaBDD.bdd.productos[indice].precio= respuestaBDD.producto.precio;
//                     return respuestaBDD;
//                 case '2.- Borrar Producto':
//                     return respuestaBDD;
//                 case '3.- Buscar Producto':
//                     return respuestaBDD;
//             }
//         }
//     )
// }
function preguntarNombre(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarFoto))
        .pipe(mergeMap(// RESP ANT OBS
    (respuesta) => {
        const indiciFoto = respuestaBDD.bdd.fotos
            .findIndex(// -1
        (foto) => {
            return foto.nombre === respuesta.nombre;
        });
        if (indiciFoto === -1) {
            console.log('*************************');
            return preguntarNombre(respuestaBDD);
        }
        else {
            console.log(indiciFoto);
            respuestaBDD.indiceFoto = indiciFoto;
            return rxjs.from(inquirer.prompt(preguntaEdicionFoto))
                .pipe(map((respuesta) => {
                respuestaBDD.foto = {
                    nombre: respuesta.nombre,
                    ubicacion: respuesta.ubicacion,
                    fecha: respuesta.fecha
                };
                return respuestaBDD;
            }));
        }
    }));
}
// function preguntarNombre(respuestaBDD: RespuestaBDD) {
//     return rxjs
//         .from(inquirer.prompt(preguntaBuscarProducto))
//         .pipe(
//             mergeMap( // RESP ANT OBS
//                 (respuesta: BuscarProductoPorNombre) => {
//                     const indiciProducto=respuestaBDD.bdd.productos
//                         .findIndex( // -1
//                             (producto) => {
//                                 return producto.nombre === respuesta.nombre
//                             }
//                         );
//                     if (indiciProducto === -1) {
//                         console.log('*************************');
//                         return preguntarNombre(respuestaBDD);
//                     } else {
//                         console.log(indiciProducto);
//                         respuestaBDD.indiceUsuario = indiciProducto;
//                         return rxjs.from(inquirer.prompt(preguntaEdicionProducto)).pipe(
//                             map(
//                                 (respuesta: Productos)=>{
//                                     respuestaBDD.producto ={
//                                         nombre:respuesta.nombre,
//                                         categoria:respuesta.categoria,
//                                         precio: respuesta.precio
//                                     };
//                                     return respuestaBDD;
//                                 }
//                             )
//                         );
//                     }
//                 }
//             )
//         );
// }
function borrarFoto(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarFoto))
        .pipe(mergeMap(// RESP ANT OBS
    (respuesta) => {
        const indiceFoto = respuestaBDD.bdd
            .fotos
            .findIndex(// -1
        (foto) => {
            return foto.nombre === respuesta.nombre;
        });
        if (indiceFoto === -1) {
            console.log('Borrar****************');
            return preguntarNombre(respuestaBDD);
        }
        else {
            console.log(indiceFoto);
            return rxjs.from(promesaEliminar(respuestaBDD.bdd.fotos, indiceFoto))
                .pipe(map(() => {
                return respuestaBDD;
            }));
        }
    }));
    // function borrarProducto(respuestaBDD: RespuestaBDD) {
    //     return rxjs
    //         .from(inquirer.prompt(preguntaBuscarProducto))
    //         .pipe(
    //             mergeMap( // RESP ANT OBS
    //                 (respuesta: BuscarProductoPorNombre) => {
    //                     const indiceProducto = respuestaBDD.bdd
    //                         .productos
    //                         .findIndex( // -1
    //                             (producto: any) => {
    //                                 return producto.nombre === respuesta.nombre
    //                             }
    //                         );
    //                     if (indiceProducto === -1) {
    //                         console.log('Borrar****************');
    //                         return preguntarNombre(respuestaBDD);
    //                     } else {
    //                         console.log(indiceProducto);
    //                         return rxjs.from(promesaEliminar(respuestaBDD.bdd.productos,indiceProducto)).pipe(
    //                             map(() =>{
    //                                     return respuestaBDD
    //                                 }
    //                             )
    //                         )
    //                     }
    //                 }
    //             )
    //         );
}
function buscarFoto(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarFoto))
        .pipe(mergeMap((respuesta) => {
        const indiceFoto = respuestaBDD.bdd.fotos
            .findIndex(// -1
        (foto) => {
            return foto.nombre === respuesta.nombre;
        });
        if (indiceFoto === -1) {
            console.log('Buscar***********');
            return preguntarNombre(respuestaBDD);
        }
        else {
            return rxjs.from(promesaBuscar(respuestaBDD.bdd.fotos[indiceFoto])).pipe(map(() => {
                return respuestaBDD;
            }));
        }
    }));
}
// function buscarProducto(respuestaBDD: RespuestaBDD) {
//     return rxjs
//         .from(inquirer.prompt(preguntaBuscarProducto))
//         .pipe(
//             mergeMap(
//                 (respuesta: BuscarProductoPorNombre) => {
//                     const indiceProducto = respuestaBDD.bdd.productos
//                         .findIndex( // -1
//                             (producto) => {
//                                 return producto.nombre === respuesta.nombre
//                             }
//                         );
//                     if (indiceProducto === -1) {
//                         console.log('Buscar***********');
//                         return preguntarNombre(respuestaBDD);
//                     } else {
//                         return rxjs.from(promesaBuscar(respuestaBDD.bdd.productos[indiceProducto])
//                         ).pipe(
//                             map(() =>{
//                                     return respuestaBDD
//                                 }
//                             )
//                         )
//                     }
//                 }
//             )
//         );
// }
const promesaBuscar = (respuestaBDD) => {
    return new Promise((resolve) => {
        const resultado = {
            respuesta: respuestaBDD
        };
        console.log('\nRespuesta:\n', respuestaBDD);
        resolve(resultado);
    });
};
const promesaEliminar = (respuestaBDD, indiceProducto) => {
    return new Promise((resolve) => {
        resolve(respuestaBDD.splice(indiceProducto, 1));
    });
};
main();
// interface BuscarProductoPorNombre {
//     nombre: string;
// }
