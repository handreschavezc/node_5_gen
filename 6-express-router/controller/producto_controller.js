const ModelProducto = require('../models/producto_model');


function errorHandler(data, next, err = null){

  if(err){
    return next(err);
  }

  if(!data){

    let error = new Error('No existe !');
    error.statusCode = 404;
    return next(error)
    
  }

}

const data = [
  {
    id: 123,
    categoria: "Polos",
    producto: "Polo Rambo"
  },{
    id: 124,
    categoria: "Polos",
    producto: "Polo Levy"
  }
];

//==========
//Param 	productoById
//==========

function productoById(req, res, next, id) {

  console.log('Metodo Param xxxxxxxxxxxxxxxx');


  let myquery = ModelProducto.findById(id);

  myquery
  .select('-imagen')
  .exec( (err, docProducto) => {

    if( err || !docProducto  ) return errorHandler(docProducto, next, err)

    req.docProducto = docProducto;
    next();

  })
}


//==========
//	get Producto x Id
//==========

function getxId(req, res, next) {

  return res.json({
    data : req.docProducto
  })

}

//==========
//	Listar Productos
//==========

function listar(req, res, next) {
 

  let myquery = ModelProducto.find();

  myquery
    .select('-imagen')
    .exec( (err, items) =>{
    
    if( err || !items  ) return errorHandler(items, next, err)


    return res.json({
      items: items
    })

  } )

}


//==========
//	Guardar Productos
//==========
function guardar(req, res, next){
  
  let data = {
    producto_nombre : req.body.producto_nombre,
    descripcion : req.body.descripcion,
    precio : req.body.precio,
    stock : req.body.stock,
    vendidos : req.body.vendidos,
    disponible : req.body.disponible,
    categoria_nombre : req.body.categoria_nombre
  }

  

  let modelProducto = new ModelProducto(data);

  if(req.files){

    console.log(req.files);
    

    modelProducto.imagen.data = req.files.imagen.data;
    modelProducto.imagen.contentType = req.files.imagen.minetype;
  }

  modelProducto.save( (err, docProducto)  => {

    if(err || !docProducto) return errorHandler(docProducto, next, err);


      docProducto = docProducto.toObject();
      delete docProducto.imagen;


    res.json({
      data : docProducto
    })

  })

}


//==========
// Borrar Productos 
//==========
function borrar(req, res){
  res.json({
      message: "Guardado"
    });
}

//==========
//	Actualizar Productos
//==========
function update(req, res){
res.json({
    message: "Guardado"
  });
}

module.exports ={
  productoById,
  getxId,
  listar,
  guardar,
  borrar,
  update
}

