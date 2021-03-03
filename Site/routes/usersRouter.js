const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require(path.join('..', 'utils','multerUsers'));
const {iniciar,processIniciar, registro, processRegistro, logout}=require('../controller/userController');
const validationRegistro = require('../validations/validationRegistro');
const validationIniciar = require('../validations/validationIniciar');
/* GET users listing. */

router.get('/iniciar',iniciar);
router.post('/iniciar',validationIniciar,processIniciar);

router.get('/registro', registro);
router.post('/registro',upload.any(),validationRegistro, processRegistro);

router.get('/logout', logout);


module.exports = router;
