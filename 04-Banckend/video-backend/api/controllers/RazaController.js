/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// http://localhost:1337/Raza/holaMundo
// http://localhost:1337/Usuario/registrar

// Framework -- expressjs

module.exports = {

  holaMundo: (peticion, respuesta)=>{
  //cliente -- peticion ..... servidor -- respuesta
    return respuesta.send('ok');
  }

};

// MODELO: Raza

//ESTANDAR RESTFULL

// METODOS
// Find Many->
// http://localhost:1337/Raza
// METODO HTTP: GET

// Find by ...->
// http://localhost:1337/Raza?nombre=Carlos
// METODO HTTP: GET

// Create ->
// // http://localhost:1337/Raza
// // METODO HTTP: POST
// // Parametros -> Body (Formulario)

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

// Query Params   DE CONSULTA
// ESTAN AL FINAL
// Se empieza con ?
// Se separa con &
// http://localhost:1337/Raza?nombre=Adrian&Apellido=Eguez
// Sirve en TODOS LOS METODOS HTTP

// Route Params   Cambian dinamicamente a la URL
// Dinamicos
// http://localhost:1337/Raza/1/casa/2/cuarto/13
// Sirve en TODOS LOS METODOS HTTP

// Form Params (Body Params)
// Sirve en TODOS LOS METODOS HTTP EXCEPTO METODO GET

// JS

// <form>
// <imput type="text" name="nombre" value="Arian">
// <imput type="text" name="nombre" value="Eguez">
// </form>

// Codigos de Estatus -> Status Code

// 1xx Informacion
// 2xx Exito
// 3xx Redireccion
// 4xx Error del Cliente
// 5xx Error de Servidor
