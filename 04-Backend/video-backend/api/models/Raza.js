/**
 * Raza.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },
    mascotas: {
      collection: 'Mascota', // Modelo Hijo
      via: 'idRaza' // Nombre del Campo
    }

  },

};

