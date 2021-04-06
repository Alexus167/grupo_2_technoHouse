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
    },
    create: (req, res) => {
		db.categories.findAll()
    },
    store: (req, res) => {
        const {name, description, price, discount, category}=req.body

		db.products.create({
			name,
			price,
			description,
			discount,
			categories_id : category
		})
    .catch(error => res.send(error));
    },
}