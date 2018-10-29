
const fs = require('fs');
//let contenidoFinal = 'Inicial';

function appendFile(nombreArchivo, contenido, callback){
    //1) Leer el archivo
    //2.1) Si existe, le añado el contenido al contenido del archivo
    //2.2) Si no existe, le creo al archivo con el contenido

    //** Devuelvan el contenido completo del archivo**
    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeidoDelArchivo) => {
            if (error) {
                // escribimos el archivo
                    fs.writeFile(
                        nombreArchivo,
                        contenido,
                        (err) => {
                            if (err) {
                                callback(undefined, err)
                            } else {
                                // Devolver el contenido
                                callback(contenido);
                            }
                        }
                    );
            } else{
                //añadimos el contenido del archivo leido
                //al contenido a escribir en el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo + contenido,
                    (err) => {
                        if (err) {
                            callback(undefined, err);
                        } else {
                            // Devolver el contenido
                            callback(contenidoLeidoDelArchivo + contenido)
                        }
                    }
                )
            }
        }
    );
}

appendFile(
    '06-texto.txt',
    '\nHola amigos',
    (contenido, err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(contenido);
        }
    });

// ['A', 'B', 'C']

// 0-A.txt      'A'
// 1-B.txt      'B'
// 2-C.txt      'C'

const respuesta = {
        nombreArchivo: '',
    contenidoArchivo: '',
    error: '',
};
[respuesta, respuesta, respuesta, respuesta]

function ejercicio(arregloStrings){
    const respuestas = [];
    arregloStrings
        .forEach(
            (string, indice) => {
                const nombreDelArchivo = '${indice} - ${string}.txt';
                const contenido = string;

                fs.writeFile(
                    nombreDelArchivo,
                    contenido,
                    (err) => {
                        const respuesta = {
                            nombreDelArchivo: nombreDelArchivo,
                            contenidoArchivo: contenido,
                            error: err,
                        };
                        respuestas.push(respuesta);
                        const estaCompletoElArreglo = respuestas.length ===
                        if (estaCompletoElArreglo){
                            callback(respuestas);
                        }
                    }
                );

            }
        )
}

ejercicio(
    ['A', 'B', 'C']
    (respuestaEjercicio) => {
        console.log(respuestaEjercicio);
}
)

