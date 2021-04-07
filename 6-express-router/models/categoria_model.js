var mongoose = require('mongoose');


var schemaCategoria = mongoose.Schema({

  categoria_nombre: {
    type: String,
    required: true,
    unique: true
  }

});

const model = mongoose.model('modelCategoria', schemaCategoria);

module.exports = model;

// Schemas   -> [Modelo]  -> Documento
