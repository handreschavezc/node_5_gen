// 1
// GET
// http://localhost:8080/usuarios/123

// 2
// GET
// http://localhost:8080/usuarios?id=123&nombre=ventas

// 3
// POST
// http://localhost:8080/usuarios


//modulo terceros
const express = require('express');

const app = express();

//body json 
app.use(express.json())


let data = [
  {
    "userId" : 123,
    "usuario": "ventas",
    "password": "123456"
  } ,{
    "userId" : 124,
    "usuario": "logistica",
    "password": "123456"
  }
];

//MIDDLEWARE
app.use(       (req, res, next) => {
  console.log('Hola soy un middleware MONTADO');
  next();
}    );


//MIDDLEWARE
app.get('*', (req, res,next)=>{
  console.log('Hola soy un middleware');
  next();
  
})

app.get('/' , (req, res) =>{
  res.json(
    {
      result: true,
      producto: "Polo"
    }
  )
})


//----------
//Listar Usuarios
//------------
app.get('/usuarios', (req, res) => {
  return res.json(
    {
      result: true,
      usuarios: data
    }
  )
})

//----------
//get usuario
//------------
app.get('/usuarios/:idusuarios', (req, res) => {

  console.log('idusuarios: ',req.params.idusuarios);

  let id = req.params.idusuarios
  

  return res.json(
    {
      result: true,
      usuarios: data.filter(items => items.userId == id)
    }
  )
})

//TODO: PENDIENTE PROXIMA CLASE

//----------
//post usuario
//------------
app.post('/usuarios', (req, res) => {

  console.log(req.body);
  

  return res.json(
    {
      result: true
    }
  )
})

app.listen(8080, ()=>{
  console.log('Server Ok 8080');
})

