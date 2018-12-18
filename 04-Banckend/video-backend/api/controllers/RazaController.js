/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// http://localhost:1337/Raza/holaMundo
// http://localhost:1337/Usuario/registrar

// expressjs

module.exports = {

  holaMundo: (peticion, respuesta)=>{

    return respuesta.send('ok');
  }

};

// MODELO: Raza

//ESTANDAR RESTFULL

// METODOS
// Find Many->
// http://localhost:1337/Raza
// METODO HTTP: GET

// Create ->
// // http://localhost:1337/Raza
// // METODO HTTP: POST
// // Parametros

// Update ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/10
// METODO HTTP: PUT
// Parametros

// Delete ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/10
// METODO HTTP: DELETE

// Find One by ID->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/10
// METODO HTTP: GET


// Parametros
