const { check, body } = require('express-validator');

const db = require('../database/models');

module.exports = [
    //Validacion del nombre
    check('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({
        min : 2,
        max : 12
    })
    .withMessage('El nombre es invalido. Debe tener entre 2 y 12 letras')
    .matches(/^[a-zA-Z ]*$/)
    .withMessage('Solo se permiten letras'),
    //Validacion del apellido
    check('lastname')
  .notEmpty()
  .withMessage('Debes ingresar tu apellido')
  .matches(/^[a-zA-Z ]*$/)
  .withMessage('Solo se permiten letras'),
    
    //Validacion del email
    check('email')
    .normalizeEmail()
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
    .trim().notEmpty().withMessage('La contraseña es requerida')
    .isLength({ min: 8, max: 12 }).withMessage('la contraseña debe tener entre 8 y 12 letras')
    .matches(/(?=.*?[A-Z])/).withMessage('La contraseña debe tener al menos una mayuscula')
    .matches(/(?=.*?[a-z])/).withMessage('La contraseña debe tener al menos una minuscula')
    .matches(/(?=.*?[0-9])/).withMessage('La contraseña debe tener al menos un numero')
    .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('La contraseña debe tener al menos un caracter especial')
    .not().matches(/^$|\s+/).withMessage('No se permiten espacios'),

    /* check('avatar')
    .custom((value,{req})=>{
        if(req.avatar[0].avatar.match(/(.jpg|.jpeg|.png|.gif|.webp)$/i)){
            return true
        }else{
            return false
        }
    })
    .withMessage('La imagen tiene que ser de tipo: jpg, jpeg, png, gif o webp'), */
    check('bases')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones ')

]