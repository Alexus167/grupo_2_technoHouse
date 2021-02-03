const express = require('express');
const router = express.Router();

/* Requiero controlador */
const mainController = require('../controller/indexController');

/* GET home page. */
router.get('/',(req, res)=>{
    return res.render('home', {
         title: 'Technohome',
         mensaje: 'tenemos lo que necesitas',
     })
 });
router.get('/search',mainController.search)

module.exports = router;
