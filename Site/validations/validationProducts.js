const { check } = require('express-validator');

module.exports = [
    check('product').notEmpty(),
    check('category').notEmpty(),
    check('sub-category').notEmpty(),

    check('name').notEmpty(),
    check('name')
        .isLength({
            min: 5
        }).withMessage('El nombre debe tener un minimo de 5 caracteres'),

    check('description').notEmpty(),
    check('description')
        .isLength({
            min: 20
        }).withMessage('La descripción debe tener un minimo de 20 caracteres'),

        check('price').notEmpty()
]