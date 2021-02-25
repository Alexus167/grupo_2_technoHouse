var express = require('express');
var router = express.Router();
const {iniciar,processIniciar, registro, processRegistro}=require('../controller/userController');
/* GET users listing. */

router.get('/iniciar',iniciar);
router.post('/iniciar',processIniciar);

router.get('/registro', registro);
router.post('/registro'.processRegistro);



module.exports = router;
