var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schemaUsuario = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'USER_ROLE',
  },
  disponible: {
    type: Boolean,
    default: true
  },
  cart: {
    items: [{
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'modelProducto'
      },
      cantidad: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      }
    }]
  }
});


schemaUsuario.methods.addCarro = function(producto){

  let _cantidad = 1;
  let newCartItems = [];

  newCartItems.push(
    {
      productId : producto._id,
      cantidad: _cantidad,
      total: producto.precio
    }
  );

  let newCart = {
    items : newCartItems
  }

  this.cart = newCart;
  return this.save();

}

const model = mongoose.model('modelUsuario', schemaUsuario);

module.exports = model;