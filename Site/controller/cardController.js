const db = require('../database/models');
const {Op} = require('sequelize');


module.exports = {
    root : (req,res) => {

    },
    detail : (req, res) => {
        db.Cards.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {
                    association : 'users'
                }
            ]
        })
        .then(cards => {
            return res.render('payform',{
                cards
            })
        })
        .catch(error => res.send(error))
    },
    create: (req, res) => {
		db.users.findAll()
		.then(users => {
			res.render('payform');
		})
		.catch(error => res.send(error));
	},
    store: (req, res) => {
		const {userNumber, expirationDate, securityCode}=req.body

		db.cards.create({
			userNumber,
			expirationDate,
			securityCode
		})
		.then(newProduct => {
			res.redirect('/payform');
		})
		.catch(error => res.send(error));
		},
    destroy: (req, res) => {

            productos.forEach(producto => {
        
                db.products.destroy({
                    where : {
                        id : req.params.id
                    }
                })
                .then(result => {
                    res.redirect('/payform');
                });
            })	
            .catch(error => res.send(error));
        },    

	
}