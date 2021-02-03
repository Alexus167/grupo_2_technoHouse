const express = require('express');
const router = express.Router();

/* Requiero controlador */
const mainController = require('../controller/indexController');

/* GET home page. */
router.get('/', mainController.index);

module.exports = router;
