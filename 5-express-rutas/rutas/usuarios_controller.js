const express = require('express');
const app = express();


const data = [
  {
    id: 123,
    usuario: "user1"
  },{
    id: 124,
    usuario: "user2"
  }
];

//==========
//	Listar usuarios
//==========

app.get('/usuarios', (req, res)=> {
  res.json({
    data:data
  })
})


//==========
//	Guardar usuarios
//==========

app.post('/usuarios', (req, res)=>{
  res.json({
    message: "Guardado"
  })
})

//==========
// Borrar usuarios 
//==========

app.delete('/usuarios/:id', (req, res)=>{
  res.json({
    message: "Guardado"
  });
})

//==========
//	Actualizar usuarios
//==========
app.put('/usuarios/:id', (req, res)=>{
  res.json({
    message: "Actualizado"
  });
})


module.exports = app;

