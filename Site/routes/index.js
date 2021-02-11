const express = require('express');
const router = express.Router();

/* Requiero controlador */
const {index, search, show, cart, shipping, productDetails, remove, productAdd, formularioPago, iniciar} = require('../controller/indexController');


/* Rutas */
router.get('/', index);
router.get('/cart', cart);
router.get('/shipping', shipping);
router.get('/remove', remove);
router.get('/formularioPago', formularioPago);


module.exports = router;
