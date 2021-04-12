const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require(path.join('..', 'utils','multerUsers'));
const {iniciar,processIniciar, registro, processRegistro, perfil, logout, edit, update, destroy}=require('../controller/userController');
const validationRegistro = require('../validations/validationRegistro');
const validationIniciar = require('../validations/validationIniciar');
const checkLog = require('../middlewares/checkLog')
const checkSession = require('../middlewares/checkSession');
/* GET users listing. */

/*** SIGN IN USER ***/
router.get('/iniciar',checkLog,iniciar);
router.post('/iniciar',checkLog, validationIniciar,processIniciar);

/*** SIGN UP USER ***/
router.get('/registro',checkLog, registro);
router.post('/registro',checkLog, validationRegistro, upload.any(), processRegistro);

/*** EDIT ONE USER ***/ 
router.get('/perfil',checkLog, perfil);
router.get('/perfil/:id',checkSession, edit); /* GET - Form to SIGN UP */
router.put('/perfil/:id',checkSession, upload.any(),update); /* PUT - Update in DB */

router.get('/logout', logout);

/*** DELETE ONE USER***/ 
router.delete('/perfil/delete/:id',checkSession, destroy); /* DELETE - Delete from DB */


module.exports = router;
