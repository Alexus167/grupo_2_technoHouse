const {check, body} = require('express-validator');

const db = require('../database/models');

module.exports = [
     // Name validation
  check('name').trim().notEmpty().withMessage('Debes ingresar tu nombre')
  .matches(/^[a-zA-Z ]*$/).withMessage('Solo se permiten letras'),
 // last Name validation
  check('lastname').notEmpty().withMessage('Debes ingresar tu apellido')
  .matches(/^[a-zA-Z ]*$/).withMessage('Solo se permiten letras'),
  // email address validation
  check('email').notEmpty().withMessage('Debes ingresar un email').normalizeEmail().isEmail().withMessage('Debe ser un email valido'),
  // password validation
  check('password').trim().notEmpty().withMessage('La contraseña es requerida')
  .isLength({ min: 8, max: 12 }).withMessage('la contraseña debe tener entre 8 y 12 letras')
  .matches(/(?=.*?[A-Z])/).withMessage('La contraseña debe tener al menos una mayuscula')
  .matches(/(?=.*?[a-z])/).withMessage('La contraseña debe tener al menos una minuscula')
  .matches(/(?=.*?[0-9])/).withMessage('La contraseña debe tener al menos un numero')
  .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('La contraseña debe tener al menos un caracter especial')
  .not().matches(/^$|\s+/).withMessage('No se permiten espacios'),

    /* check('name')
    .isLength({
        min : 2,
        max : 12
    })
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido')
    .notEmpty()
    .withMessage('El email es requerido'),

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
        */
    check('avatar')
    .custom((value,{req})=>{
        if(req.avatar[0].avatar.match(/(.jpg|.jpeg|.png|.gif|.webp)$/i)){
            return true
        }else{
            return false
        }
    })
    .withMessage('La imagen tiene que ser de tipo: jpg, jpeg, png, gif o webp')
    .notEmpty()
    .withMessage('Ingrese una imagen'), 
    /* check('bases')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones ') */

]