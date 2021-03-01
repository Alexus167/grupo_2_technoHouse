// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {root, detail, create, store, edit, update, destroy, search} = require('../controller/productController');

router.get('/', root); /* GET - All products */
router.get('/detail/:id', detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', create); /* GET - Form to create */
router.post('/store', store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', edit); /* GET - Form to create */
router.put('/update/:id', update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', destroy); /* DELETE - Delete from DB */

router.get('/search', search);

module.exports = router;
