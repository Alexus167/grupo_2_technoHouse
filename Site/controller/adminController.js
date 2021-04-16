const db = require('../database/models')
const fs = require('fs');
const { validationResult } = require('express-validator');

const adminController = {

profile : (req,res) => {

},

list:  db.users.findAll({
        order : [
            ['title','ASC']
        ],
    })
    .then(users => {
        return res.render('users',{
    products,
    toThousand
    })

})
},

