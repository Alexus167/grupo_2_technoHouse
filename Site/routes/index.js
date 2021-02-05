const express = require('express');
const router = express.Router();

/* Requiero controlador */
const {index, search, show} = require('../controller/indexController');

/* Rutas */
router.get('/', index);
router.get('/show/id:', show)

module.exports = router;
