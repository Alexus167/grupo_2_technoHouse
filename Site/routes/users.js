var express = require('express');
var router = express.Router();
const {iniciar}=require('../controller/userController');
/* GET users listing. */

router.get('/iniciar',iniciar);


module.exports = router;
