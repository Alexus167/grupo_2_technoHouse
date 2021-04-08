const express = require('express');

const router = express.Router();

const {root, detail} = require('../controller/categoryController');

router.get('/', root); 
router.get('/detail/:id', detail); 



module.exports = router;