const express = require('express');
const router = express.Router();
const checkSession = require('../validations/checkSession');

/* Requiero controlador */
const {index, cart, shipping, formularioPago, /* productDetails */} = require('../controller/indexController');


/* Rutas */
router.get('/', index);
router.get('/cart', cart);
router.get('/shipping', shipping);
router.get('/formularioPago', checkSession, formularioPago);
/* router.get('products/detail/:id', productDetails); */



module.exports = router;
