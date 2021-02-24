var express = require('express');
var router = express.Router();
const {iniciar, signUp}=require('../controller/userController');
/* GET users listing. */

router.get('/iniciar',iniciar);
router.get('/signUp', signUp);


module.exports = router;
