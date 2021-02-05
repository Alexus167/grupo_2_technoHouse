const express = require('express');
const router = express.Router();

/* Requiero controlador */
const {index, search, show, cart, shipping, remove, productDetails} = require('../controller/indexController');

/* Rutas */
router.get('/', index);
router.get('/show/id:', show)
router.get('/cart', cart)
router.get('/shipping', shipping)
router.get('/productDetails', productDetails)

module.exports = router;
