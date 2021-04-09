const express = require('express');

const { 
  getxId,
  listar, 
  guardar, 
  borrar, 
  update,
  productoById 
} = require('../../controller/producto_controller');


const router = express.Router();

//Params

router.param('productoId', productoById);


//Rutas
router.get('/producto', listar);
router.get('/producto/:productoId', getxId);
router.post('/producto', guardar);
router.delete('/producto/:productoId', borrar); 
router.put('/producto/:productoId', update); 

module.exports = router;