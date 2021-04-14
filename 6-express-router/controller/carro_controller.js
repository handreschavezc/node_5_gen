const ModelProducto = require('../models/producto_model');
const ModelUsuario = require('../models/usuario_model');


const addCarro = async (req, res, next) => {

  let productId = req.body.productId;
  let usuarioId = req.body.usuarioId;

  try {
    docProducto = await ModelProducto.findById(productId).exec()
    console.log(docProducto);

    if(!docProducto){
      err =  new Error('No Existe')
      err.statusCode = 404;
      throw(err);
    }

    docUsuario = await ModelUsuario.findById(usuarioId).exec();

    docUsuario = await docUsuario.addCarro(docProducto);

    res.json(docUsuario)


  } catch (error) {
    next(error);
  }

  
  docUsuario = await ModelUsuario.find

  

}

module.exports ={
  addCarro
}