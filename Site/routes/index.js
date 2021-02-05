const express = require('express');
const router = express.Router();

/* Requiero controlador */
const{ index, productAdd} = require('../controller/indexController');


/* GET home page. */
router.get('/', index);
router.get('/productAdd', productAdd);


module.exports = router;
