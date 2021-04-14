const express = require('express');

const { 
  addCarro,

} = require('../../controller/carro_controller');


const router = express.Router();



//Rutas
router.post('/addCarro', addCarro);


module.exports = router;