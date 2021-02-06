const express = require('express');
const router = express.Router();

/* Requiero controlador */
const {index, search, show, cart, shipping, productDetails, remove, productAdd, formularioPago} = require('../controller/indexController');


/* Rutas */
router.get('/', index);
router.get('/show/id:', show);
router.get('/cart', cart);
router.get('/shipping', shipping);
router.get('/productDetails', productDetails);
router.get('/remove', remove);
router.get('/productAdd', productAdd);
router.get('/formularioPago', formularioPago);


module.exports = router;
