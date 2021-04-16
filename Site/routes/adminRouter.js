const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require(path.join('..', 'utils','multerProducts'));
const checkSession = require('../middlewares/checkSession');
const validationProducts = require('../validations/validationProducts');

const {perfil, productDelete, editProduct, newProduct, productAdd, productList, updateProduct} = require('../controller/adminController')

router.get('/adminProfile',adminCheck, perfil);

/* carga de producto*/
 router.get('/create', adminCheck, productAdd);
router.post('/create', upload.any(), productValidator, newProduct);


/* edicion y subida de producto  */
router.get('/edit/:id', adminCheck , editProduct);
router.put('/update/:id', upload.any(), updateProduct);

/* elimina producto */
router.delete('/eliminar/:id', adminCheck , productDelete);

/* lista productos */
 router.get('/list', adminCheck , productList);

module.exports = router; 