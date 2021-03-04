const {check, validationResult, body} = require('express-validator');
const { getUsers} = require('../data/users');

module.exports = [
    check('email').notEmpty().withMessage('Debe ingresar su correo electronico'),
    check('pass').notEmpty().withMessage('Debe ingresar su contraseña'),

]