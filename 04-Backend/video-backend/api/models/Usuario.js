/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  // Nombre de la tabla
  tableName: 'db_usuario',

  // estar los nombres de sus atributos y
  // la configuracion de cada uno de ellos

  attributes: {

    nombre:{
      type:'string',
      required: true
    },
    aoellido:{
      type:'string',
      required: true
    },
    direccionCasa:{
      type:'string',
      columnName:'direccion_casa',
    },
    cedula:{
      type:'string',
      required: true,
      unique: true
    },
    sueldo:{
      type:'number',
      defaultsTo: 394.00    // guardar valores por defecto
    },
    correoElectronico:{
      type:'string',
      columnName: 'correo_electronico',
      isEmail: true
    },
    numeroPropiedades:{
      type:'number',
      columnName: 'numero_propiedades',
      max: 5,
      min: 0,
      defaultsTo: 0
    },
    estado:{
      type:'boolean',
      defaultsTo: true
    },
    rol:{
      type:'string',
      //Quiero que me acete que el rol sea Administrador o Usuario o Reportes
      isIn: [
        'Administrador',
        'Usuario',
        'Reporte'
      ],
      defaultsTo: 'Usuario'
  },
  }
};

// RESTFULL -> HTTP -> ESTANDAR (PUEDEN)

// Modelo -> Tabla de la BDD

// Modelo -> Crear Borrar Actualizar Buscar

// request -> Parametros
//
// Metodo HTTP -> GET POST PUT DELETE OPTIONS
//
// response -> Status Code 1 2 3 4 5
//
//
//
// -> Find All
// http://192.168.0.12:1337/Usuario
// METHOD: GET
//
// -> Crear
// http://192.168.0.12:1337/Raza
// METHOD: POST
// !PARAMETROS! (body / form -- formulario)
//
//
// -> Find One By ID
// http://192.168.0.12:1337/Usuario/25
// METHOD: GET
//
//
// -> Update One By ID
// http://192.168.0.12:1337/Usuario/25
// METHOD: PUT
// !PARAMETROS! (body / form)
//
// -> Delete One By ID
// http://192.168.0.12:1337/Usuario/25
// METHOD: DELETE
//
//

















