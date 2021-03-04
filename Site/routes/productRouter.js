// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require(path.join('..', 'utils','multerProducts'));
const checkSession = require('../middlewares/checkSession');
// ************ Controller Require ************
const {root, detail, create, store, edit, update, destroy, search} = require('../controller/productController');

router.get('/', root); /* GET - All products */
router.get('/detail/:id', detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create',checkSession, create); /* GET - Form to create */
router.post('/store',checkSession, upload.any(),store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',checkSession, edit); /* GET - Form to create */
router.put('/update/:id',checkSession, upload.any(),update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id',checkSession, destroy); /* DELETE - Delete from DB */

/*** BUSCADOR ***/
router.get('/search', search);

module.exports = router;
