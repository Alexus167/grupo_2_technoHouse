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
    /* .isNumeric({
        min : 1
    })
    .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
        ) */
    .withMessage('La contraseña debe tener un min de 8 y max 12 caracteres y debe contener al menos una letra mayuscula, un numero y un caracter especial'),

    check('avatar')
    .custom((value,{req})=>{
        if(req.avatar[0].avatar.match(/(.jpg|.jpeg|.png|.gif|.webp)$/i)){
            return true
        }else{
            return false
        }
    })
    .withMessage('La imagen tiene que ser de tipo: jpg, jpeg, png, gif o webp'), 
    
    check('bases')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones ')

]