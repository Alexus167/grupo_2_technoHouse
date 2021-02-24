var express = require('express');
var router = express.Router();
const {iniciar, registro}=require('../controller/userController');
/* GET users listing. */

router.get('/iniciar',iniciar);
router.get('/registro', registro);


module.exports = router;
