const express = require('express');

const { 
  addCarro,
  listarCarro,
  clearCarr
} = require('../../controller/carro_controller');


const router = express.Router();



//Rutas
router.post('/carro', addCarro);
router.get('/carro/:id', listarCarro);
router.delete('/carro/:id', clearCarr);


module.exports = router;