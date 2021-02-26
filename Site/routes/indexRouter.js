const express = require('express');
const router = express.Router();

/* Requiero controlador */
const {index, cart, shipping, formularioPago, productDetails} = require('../controller/indexController');


/* Rutas */
router.get('/', index);
router.get('/cart', cart);
router.get('/shipping', shipping);
router.get('/formularioPago', formularioPago);
router.get('/productDetails', productDetails);



module.exports = router;
