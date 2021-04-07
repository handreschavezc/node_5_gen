const express = require('express');
const app = express();

app.use( require('./rutas/index') )

app.listen(8080, ()=>{
  console.log("Servidor ok 8080");
  
})