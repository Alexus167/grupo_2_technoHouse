const {check, validationResult, body} = require('express-validator');
const { getUsers} = require('../data/users');

let users = getUsers();

module.exports = [
    check('name')
    .isLength({
        min:2, max:12
    }).notEmpty().withMessage('Debe ingresar un nombre valido'),
    check('lastname').notEmpty().withMessage('Debe ingresar su apellido'),
    check('password')
    .isLength({
        min:4, max:12
    }).notEmpty().withMessage('La contraseña debe tener más de 4 caracteres y menos de 12 caracteres'),

    body('email').custom(value => {
    let result = users.find(users => users.email === value.trim())
        if (result) {
          return false
          }else{
              return true
          }
        })
        .withMessage('El email ya fue registrado')
]