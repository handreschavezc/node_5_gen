//Modulos Terceros
const express = require('express');
const mongoose = require('mongoose');

//Modulos Propios
const routerV1 = require('./routers/v1/index');
// const routerV2 = require('./routers/v2/index');


//EXPRESS
const app = express();
//body json  -> Middelware
app.use( express.json() )

//ROUTES
routerV1(app);





mongoose.connect('mongodb://localhost/node5Gen', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(  ()=>{
  console.log('Mongo Ok');
  
})


app.listen(8080, ()=>{
  console.log('Servidor Ok 8080');
  
})
