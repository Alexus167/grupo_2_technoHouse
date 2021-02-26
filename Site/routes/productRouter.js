// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {root, detail, create, store, edit, update, destroy} = require('../controller/productController');

router.get('/', root); /* GET - All products */
router.get('/detail/:productId/', detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', create); /* GET - Form to create */
router.post('/store', store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:productId', edit); /* GET - Form to create */
router.put('/update/:productId', update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:productId', destroy); /* DELETE - Delete from DB */

module.exports = router;
