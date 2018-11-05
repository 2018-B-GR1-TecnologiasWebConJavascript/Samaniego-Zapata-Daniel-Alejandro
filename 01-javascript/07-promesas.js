// 07-promesas.js
const fs = require('fs');
const nombre = '06-ejemplo.txt';
const nuevaPromesa = (nombreArchivo) => {
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
                        resolve(contenidoLeidoDelArchivo);
                        console.log('si')
                    }

                }
            )
        }
    )
};

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }

                }
            )
        }
    )
};

nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log('OK', contenido);
            //concatenando
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );


/*
function appendFile(nombreArchivo, contenido) {
    nuevaPromesa("07-ejemplo.txt")
        .then(contenido => {
            console.log(contenido);
            return nuevaPromesaEscritura(
                "07-ejemplo2.txt",
                contenido + "Adios amigos"
            );
        })
        .then(contenidoArchivoEscrito => {
            console.log(contenidoArchivoEscrito);
        })
        .catch(error => {
            console.log("Catch", error);
        });
}

appendFile("06-texto.txt", "\nHola amigos");

*/
const ejercicio = (arregloStrings) => {
    const respuestas = [];
    return new Promise((resolve, reject) => {
        arregloStrings.forEach(
            (string, indice) => {
                const nombreDelArchivo = '${indice} - ${string}.txt';
                const contenidoArchivo = string;
                fs.writeFile(
                    nombreDelArchivo,
                    contenidoArchivo,
                    (err) => {

                        if (err) {
                            reject(err)
                        } else {
                            const respuesta = {
                                nombreDelArchivo: nombreDelArchivo,
                                contenidoArchivo: contenidoArchivo,
                                error: err,
                            };
                            respuestas.push(respuesta);
                            resolve(respuestas)
                        }
                    })
            });
    })
}


ejercicio(['A', 'B', 'C', 'D'])
    .then(
        (respuestas) => {
            console.log(respuestas);
            return ejercicio(['A', 'B', 'C', 'D']);
        }
    )
    .catch(
        (error) => {
            console.log('Catch', error);
        }
    );

