const fs = require('fs');
//const express = require('express');

console.log(fs);
//console.log(express);

const nombreArchivo = 'ejemplo.txt';
const contenidoArchivo = new Date();

console.log('Inicio');

fs.readFile(nombreArchivo, 'utf-8',
    (error, textoDelArchivoLeido) => {  //CALLBACK


    if (error) {
       // throw new.Error(error);
        try{
            throw  new Error(error);
        }catch (e) {
            console.error(e);
        }
    }else {
        console.log(textoDelArchivoLeido);
        fs.writeFile(nombreArchivo, textoDelArchivoLeido + '\n' + contenidoArchivo,
            (err) => {
                if(err) throw err;
                    console.log('Archivo Guardado');
            }
        );
    }
}
);
console.log('Fin');

