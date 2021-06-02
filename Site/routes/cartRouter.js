const express = require('express');
const router = express.Router();

const  {addItem, removeItem, showCart, emptyCart} = require('../controller/cartController')


router.get('/agregar/:id',addItem);
router.get('/quitar/:id',removeItem);
router.get('/listar',showCart);
router.get('/vaciar',emptyCart)

module.exports = router