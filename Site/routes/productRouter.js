// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require('../utils/multerProducts');
const checkSession = require('../middlewares/checkSession');
const validationProducts = require('../validations/validationProducts');
// ************ Controller Require ************
const {root, detail, create, store, edit, update, destroy, search, category} = require('../controller/productController');

router.get('/', root); /* GET - All products */
router.get('/detail/:id', detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create',checkSession, create); /* GET - Form to create */
router.post('/store',checkSession, upload.any(), validationProducts,store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',checkSession, edit); /* GET - Form to create */
router.put('/update/:id',checkSession, upload.any(),validationProducts,update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id',checkSession, destroy); /* DELETE - Delete from DB */

/*** BUSCADOR ***/
router.get('/search', search);

router.get('/categories/:id', category)

module.exports = router;
