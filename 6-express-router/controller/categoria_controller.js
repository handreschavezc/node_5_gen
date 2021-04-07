const ModelCategoria = require('../models/categoria_model');

const data = [
  {
    id: 123,
    nombre: "Polos"
  },{
    id: 124,
    nombre: "Pantalones"
  }
];

//==========
//	Listar Categorias
//==========

function listar(req, res) {
  
  ModelCategoria.find().exec( (err, items) =>{
    if(err){
      return res.status(500).json({
        error: err
      })
    }

    if(!items){
       return res.status(404).json({
        data: "No existe"
      })
    }

    return res.json({
      items: items
    })

  } )

}

//==========
//	Get  x Id Categoria
//==========

function getCategoria(req, res) {

  let id = req.params.id;


  ModelCategoria.findById( id, (err, docCategoria) =>{
    if(err){
      return res.status(500).json({
        error: err
      })
    }

    if(!docCategoria){
       return res.status(404).json({
        message: "No existe"
      })
    }

    return res.json({
      data: docCategoria
    })

  } );
  

}


//==========
//	Guardar Categoria
//==========
function guardar(req, res){

  console.log(req.body);
  

  let data = {
    categoria_nombre: req.body.categoria_nombre
  }

  const modelCategoria = new ModelCategoria(data);
  modelCategoria.save( (err, docCategoria) => {
    
    if(err){
      return res.status(500).json({
        error: err
      })
    }

    return res.json({
      data: docCategoria
    })

    
    
  })


 
}


//==========
// Borrar Categoria 
//==========
function borrar(req, res){
  
  const id = req.params.id;
  ModelCategoria.findByIdAndRemove( id, (err, docCategoria) => {
    if(err){
      return res.status(500).json({
        error: err
      })
    }

    if(!docCategoria){
       return res.status(404).json({
        message: "No existe"
      })
    }

    return res.json({
      data: docCategoria
    })


  } )

}

//==========
//	Actualizar
//==========
function update(req, res){
  const id = req.params.id;

  const data = {
    categoria_nombre: req.body.categoria_nombre
  }

  ModelCategoria.findByIdAndUpdate(id, { categoria_nombre: req.body.categoria_nombre  } ,{new: true},  (err, docCategoria) => {
    if(err){
      return res.status(500).json({
        error: err
      })
    }

    if(!docCategoria){
       return res.status(404).json({
        message: "No existe"
      })
    }

    return res.json({
      data: docCategoria
    })
  })

}

module.exports = {
  listar,
  getCategoria,
  guardar,
  borrar,
  update
}



