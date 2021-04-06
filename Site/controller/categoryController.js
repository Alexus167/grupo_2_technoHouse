const db = require("../database/models");

module.exports = {
    root : (req,res) => {

    },
    detail : (req, res) => {
        db.Categories.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {
                    association : 'products'
                }
            ]
        })
        .then(categories => {
            return res.render('productsCategories',{
                categories
            })
        })
        .catch(error => res.send(error))
    }
}