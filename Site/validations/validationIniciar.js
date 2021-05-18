const {check} = require('express-validator');


module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debe ingresar su correo electronico')
    .isEmail()
    .withMessage('Debe ingresar su correo electronico'),

    
    check('password')
    .notEmpty()
    .withMessage('Debe ingresar su contraseña'),

]