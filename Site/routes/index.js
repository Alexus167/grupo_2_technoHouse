const express = require('express');
const router = express.Router();

/* Requiero controlador */
<<<<<<< HEAD
const{ index, productAdd, formularioPago} = require('../controller/indexController');


/* GET home page. */
router.get('/', index);
router.get('/productAdd', productAdd);
router.get('/formularioPago', formularioPago);
=======
const {index, search, show} = require('../controller/indexController');

/* Rutas */
router.get('/', index);
router.get('/show/id:', show)
>>>>>>> bcb0d580fc398ba7c449aa60145aa0316f38c70d

module.exports = router;
