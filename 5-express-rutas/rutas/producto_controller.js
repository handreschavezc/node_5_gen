const express = require('express');
const app = express();


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

app.get('/producto', (req, res)=> {
  res.json({
    data:data
  })
})


//==========
//	Guardar Producto
//==========

app.post('/producto', (req, res)=>{
  res.json({
    message: "Guardado"
  })
})

//==========
// Borrar Producto 
//==========

app.delete('/producto/:id', (req, res)=>{
  res.json({
    message: "Guardado"
  });
})

//==========
//	Actualizar Producto
//==========
app.put('/producto/:id', (req, res)=>{
  res.json({
    message: "Actualizado"
  });
})

module.exports = app;


