const {getProducts, setProdcts} = require('../data/productos');
const fs = require('fs');
const path = require('path');
const multer = require('multer')
const { stringify } = require('querystring');
const { pathToFileURL } = require('url');

const productos = getProducts();
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
	// Root - Show all products
	root: (req, res) => {
			db.Product.findAll({
				order : [
					['name','ASC']
				],
				include: [
					{association: 'category'}]
			})
			.then(productos => {
				return res.render('products',{
			productos,
			toThousand
			})

		});
		},

	// Detail - Detail from one product
	detail : (req, res) => {
		db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: 'category'}]
        })
        .then(product => {
            res.render("productDetails", {
                product
            })
        })
		.catch(error => res.send(error));

       
    },

	// Create - Form to create
	create: (req, res) => {
		db.Category.findAll()
		.then(categories => {
			res.render('admin/productAdd', { categories });
		})
		.catch(error => res.send(error));
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const {name, description, price, discount, category}=req.body

		db.Product.create({
			name,
			price,
			description,
			discount,
			categoryId : category,
			image: req.files[0] ? req.files[0].filename : 'default-img.png'
		})
		.then(newProduct => {
			res.redirect('/products');
		})
		.catch(error => res.send(error));
		},

	// Update - Form to edit
	edit: (req, res) => {

		let product = db.Product.findByPk(req.params.id)
		let categories = db.Category.findAll()
		Promise.all([product,categories])
		.then(([product,categories]) =>{
		res.render('admin/productEdit',{
			product,
			categories
		});
	 	})
		.catch(error => res.send(error)) 
	},
	// Update - Method to update
	update: (req, res) => {

		const {name, description, price, discount, category}=req.body
		db.Product.update({
			name,
			price,
			description,
			discount,
			categoryId : category,
			image : req.files[0] ? req.files[0].filename : undefined
		},
		{
			where : {
				id : req.params.id
			}
		})
		.then(result => {
			res.redirect('/products');	
		})
		
	},
		
				

	// Delete - Delete one product from DB
	destroy: (req, res) => {
	
			db.Product.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(result => {
				res.redirect('/products');
			})
		.catch(error => res.send(error));
	},


	search : (req,res)=>{
	let productos = db.Product.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.substring]: req.query.search } }
                ]
            },
			include: [
                {association: 'category'}]
        });
        Promise.all([productos]).then(([productos]) => {
            res.render("products", {
                productos,
                title: "Resultado de la busqueda",
            });
        })
		.catch(error => res.send(error));
    },
		category: (req, res) => {
			db.Product.findAll({ where : {
				categoryId: req.params.id
			}, include: [
				{association: 'category'}]})
			.then((productos) => {
				res.render('products', {
					productos
				})
			})
			.catch(error => res.send(error));
		}
}
