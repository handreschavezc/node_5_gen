
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
//	Listar Productos
//==========

function listar(req, res) {
  res.json({
    data
  })
}


//==========
//	Guardar Productos
//==========
function guardar(req, res){
  res.json({
      message: "Guardado"
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
  listar,
  guardar,
  borrar,
  update
}

