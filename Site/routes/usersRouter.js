const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require(path.join('..', 'utils','multerUsers'));
const {iniciar,processIniciar, registro, processRegistro, logout}=require('../controller/userController');
const validationRegistro = require('../validations/validationRegistro');
const validationIniciar = require('../validations/validationIniciar');
const checkLog = require('../middlewares/checkLog')
/* GET users listing. */

router.get('/iniciar',checkLog,iniciar);
router.post('/iniciar',checkLog, validationIniciar,processIniciar);

router.get('/registro',checkLog, registro);
router.post('/registro',checkLog, upload.any(),validationRegistro, processRegistro);

router.get('/logout', logout);


module.exports = router;
