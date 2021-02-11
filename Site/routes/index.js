const express = require('express');
const router = express.Router();

/* Requiero controlador */
const {index, search, show, cart, shipping, productDetails, remove, productAdd, formularioPago, iniciar} = require('../controller/indexController');


/* Rutas */
router.get('/', index);
router.get('/show/id:', show);
router.get('/cart', cart);
router.get('/shipping', shipping);
router.get('/productDetails/:id', productDetails);
router.get('/remove', remove);
router.get('/productAdd', productAdd);
router.get('/formularioPago', formularioPago);
router.get('/iniciar', iniciar);


module.exports = router;
