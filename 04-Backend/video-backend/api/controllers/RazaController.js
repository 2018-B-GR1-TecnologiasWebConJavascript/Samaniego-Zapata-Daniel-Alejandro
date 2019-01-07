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

  holaMundo: function (peticion, respuesta) {
    return respuesta.ok('ok');
  },
  buscarPorNombre: async function (req, res) {
    // TENER ACCESO A TODOS LOS MODELOS
    // Body Query
    const parametros = req.allParams();

    var nombreCac = await Raza.find({
      nombre: {'startsWith': parametros.nombre}
    });

    return res.ok(nombreCac);

  },

};


// ESTANDAR RESTFULL

// MODELO: Raza

// Find Many->
// http://localhost:1337/Raza
// METODO HTTP: GET


// Find by ... ->
// http://localhost:1337/Raza?nombre=Carlos
// METODO HTTP: GET


// Create ->
// http://localhost:1337/Raza
// METODO HTTP: POST
// Parametros -> Body (Formulario)

// Update ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/10
// METODO HTTP: PUT
// Parametros


// Delete ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/10
// METODO HTTP: DELETE


// Find One by ID ->
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/10
// METODO HTTP: GET


// Query Params
// AL FINAL DEL URL
// ? Empieza
// & Se separa
// http://localhost:1337/Raza?nombre=Adrian&apellido=Eguez
// TODOS LOS METODOS HTTP

// Route Params
// Dinamicos
// http://localhost:1337/Raza/4/casa/5/cuarto/6
// TODOS LOS METODOS HTTP

// Form Params  (Body Params)
// NO SIRVE EN EL METODO "GET"

// JS

// <form>
// <input type="text" name="nombre" value="Adrian">
// <input type="text" name="apellido" value="Eguez">
// </form>


//

// Codigos de estado -> Status Code

// 1XX  -> Informacion
// 2XX  -> Exito
// 3XX  -> Redireccion
// 4XX  -> Error del CLIENTE
// 5XX  -> Error del SERVIDOR






