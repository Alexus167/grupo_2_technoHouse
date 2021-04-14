// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require(path.join('..', 'utils','multerProducts'));
const checkSession = require('../middlewares/checkSession');
// ************ Controller Require ************
const {root, detail, create, store, edit, update, destroy} = require('../controller/cardController');

router.get('/payform', root); /* GET - All products */
router.get('/payform/:id', detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/payform/create',checkSession, create); /* GET - Form to create */
router.post('/payform/store',checkSession, upload.any(),store); /* POST - Store in DB */


/*** DELETE ONE PRODUCT***/ 
router.delete('/payform/delete/:id',checkSession, destroy); /* DELETE - Delete from DB */


module.exports = router;
