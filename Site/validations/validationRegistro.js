const {check, validationResult, body} = require('express-validator');


module.exports = [
    check('first_name')
    .isLength({
        min:4, max:12
    }).notEmpty().withMessage('Debe ingresar un nombre valido'),
    check('last_name').notEmpty().withMessage('Debe ingresar su apellido'),
    check('pass')
    .isLength({
        min:4, max:12
    }).notEmpty().withMessage('La contraseña debe tener más de 4 caracteres y menos de 12 caracteres'),

    body('last_name').custom(value => {
    let result = users.find(users => users.email === email.trim())
        if (result) {
          return false
          }else{
              return true
          }
        })
        .withMessage('El email ya fue registrado')
]