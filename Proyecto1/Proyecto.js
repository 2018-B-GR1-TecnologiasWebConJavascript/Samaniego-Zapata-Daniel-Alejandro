/*import {from} from "rxjs";*/
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const fotoAGuardar = {};
console.log('Bienvenido Fotos del Mundo');
const menuFotos = {
    name: 'itemMenu',
    type: 'list',
    message: 'Escoja una opción',
    choices: [
        'Ingresar foto',
        'Listar galeria',
        'Eliminar fotos',
        'Modificar fotos',
    ],
    default: 0
};
const atributosFoto = [
    {
        name: 'nombre',
        type: 'input',
        message: 'Ingresar el nombre de la foto'
    },
    {
        type: 'input',
        name: 'ubicacion',
        message: 'Ingresar la ubicacion de la foto'
    },
    {
        type: 'input',
        name: 'Fecha',
        message: 'Ingresar la fecha de la captura'
    }
];
const Escritura = (contenidoArchivo) => {
    return new Promise(//Promesa 1
    (resolve, reject) => {
        resolve(//Promesa 2
        Lectura('galeria.txt')
            .then(respuesta => {
            fs.writeFile("galeria.txt", respuesta + '\n' + contenidoArchivo, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve({ mesaje: "Ingresado correctamente" });
                }
            });
        })
            .catch(respuesta => {
            fs.writeFile("galeria.txt", contenidoArchivo, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve({ mesaje: "Ingresado correctamente" });
                }
            });
        }));
        reject({ mensaje: 'error' });
    });
};
const Lectura = (nombreArchivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (err, contenidoLeidoDelArchivo) => {
            if (err) {
                reject(err);
                console.log('err');
            }
            else {
                resolve(contenidoLeidoDelArchivo);
            }
        });
    });
};
inquirer.prompt([menuFotos]).then((respuesta) => {
    console.log(respuesta.itemMenu);
    switch (respuesta.itemMenu) {
        case 'Ingresar foto':
            inquirer.prompt(atributosFoto).then((respuesta) => {
                const escribirArchivo$ = rxjs.from(Escritura(JSON.stringify(respuesta))); //Objeto JSON y me transforma a string
                escribirArchivo$.subscribe(respuest => {
                });
            });
            break;
        case 'Listar galeria':
            const leerArchivo$ = rxjs.from(Lectura('galeria.txt')); //Promesa a observable
            leerArchivo$.subscribe(respuesta => {
                console.log(respuesta);
                /*console.log(JSON.parse(respuesta))*/ //Coge una string y me transforma en JSON
            });
            break;
        case 'Eliminar nombre de la foto':
            break;
        case 'Modificar nombre de la foto':
            break;
    }
});
