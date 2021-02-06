const express = require('express');
const router = express.Router();

/* Requiero controlador */
const{ index, productAdd, formularioPago} = require('../controller/indexController');


/* GET home page. */
router.get('/', index);
router.get('/productAdd', productAdd);
router.get('/formularioPago', formularioPago);

module.exports = router;
