/* const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

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
] */

const {check, body} = require('express-validator');

const db = require('../database/models');

module.exports = [
    check('name')
    .isLength({
        min : 2,
        max : 12
    })
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('email').custom(value => {

        return db.users.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este email ya está registrado')
            }
        })

    }),

    check('password')
    .isLength({
        min : 8,
        max : 12
    })
    .isNumeric({
        min : 1
    })
    .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
        )
    .withMessage('La contraseña debe tener un min de 8 y max 12 caracteres y debe contener al menos una letra mayuscula, un numero y un caracter especial'),


    check('bases')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones ')

]