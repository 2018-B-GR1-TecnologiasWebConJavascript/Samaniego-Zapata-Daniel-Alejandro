declare var require;
const inquirer  = require('inquirer');
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
}

const atributosFoto = [
    {
        name: 'Nombre',
        type: 'input',
        message: 'Ingresar el nombre de la foto'
    },

    {
        type: 'input',
        name: 'Ubicacion',
        message: 'Ingresar la ubicacion de la foto'
    },

    {
        type: 'input',
        name: 'Fecha',
        message: 'Ingresar la fecha de la captura (dd/mm/yyyy)'
    }
]

const buscarFoto = {
    type: 'input',
    name: 'buscarFoto',
    message: 'Buscar foto'
}

const Lectura = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('err')
                    } else {
                        resolve(contenidoLeidoDelArchivo)
                    }

                }
            )
        }
    )
};

const Escritura = (foto, nombreArchivo) => {
    return new Promise(((resolve, reject) => {
        fs.writeFile(
            nombreArchivo,
            foto,
            (err) => {
                if (err){
                    reject(err);
                } else{
                    resolve({
                        mesaje: "Ingresado correctamente",
                        foto
                    })
                }
        }
        )
        })
    )
};

inquirer.prompt([menuFotos]).then((respuesta)=>{

    console.log(respuesta.itemMenu)

    switch (respuesta.itemMenu) {
        case 'Ingresar foto':
            inquirer.prompt(atributosFoto).then((respuesta)=>{  //Solo para menus el inquirer
                const escribirArchivo$ = rxjs.from(Escritura(JSON.stringify(respuesta), respuesta.Nombre))  //toda la promesa  y los parametros .. respuesta .. los datos que meto ... y respuesta.Nombre coge el nombre de la foto y lo guarda con el mismo nombre en un archivo.... Objeto JSON y me transforma a string
                escribirArchivo$.subscribe(respuest=>{                          //todo es Promesa a observable
                })
            })
            break
        case 'Listar galeria':
            const leerArchivo$ = rxjs.from(Lectura('galeria.txt'))   //Promesa a observable
            leerArchivo$.subscribe(respuesta=>{
                console.log(respuesta)
                /*console.log(JSON.parse(respuesta))*/    //Coge una string y me transforma en JSON
            })

            break
        case 'Eliminar fotos':
            inquirer.prompt([buscarFoto]).then((respuesta)=>{
                fs.unlink('./'+respuesta.buscarFoto, (err) => {
                        if (err) throw err;

                        console.log('Foto eliminada ' + respuesta.buscarFoto);
                    })
            });

            break
        case 'Modificar fotos':
            inquirer.prompt([buscarFoto]).then((respuesta)=>{
                fs.unlink('./'+respuesta.buscarFoto, (err) => {
                    if (err) throw err;
                    inquirer.prompt(atributosFoto).then((respuesta) => {  //Solo para menus el inquirer
                        const escribirArchivo$ = rxjs.from(Escritura(JSON.stringify(respuesta), respuesta.Nombre))  //Objeto JSON y me transforma a string
                        escribirArchivo$.subscribe(respuest => {     //todo es Promesa transformada a observable
                            console.log('Foto modificada correctamente')
                        })
                    })
                })
                })
                break
    }
})