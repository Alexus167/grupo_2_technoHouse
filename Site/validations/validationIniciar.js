const {check, validationResult, body} = require('express-validator');


module.exports = [
    check('email').isEmpty().withMessage('Debe ingresar su correo electronico'),
    check('pass').isEmpty().withMessage('Debe ingresar su contraseña'),

    body('email').custom(value => {
    let result = users.find(users => users.email === email.trim())
        if (result) {
          return false
          }else{
              return true
          }
        })
        .withMessage('El email ya fue registrado')
]