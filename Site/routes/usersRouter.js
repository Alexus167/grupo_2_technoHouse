const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require(path.join('..', 'controller','userController'));
const {iniciar,processIniciar, registro, processRegistro}=require('../controller/userController');
/* GET users listing. */

router.get('/iniciar',iniciar);
router.post('/iniciar',processIniciar);

router.get('/registro', registro);
router.post('/registro', processRegistro);



module.exports = router;
