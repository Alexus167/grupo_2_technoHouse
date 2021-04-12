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
			db.products.findAll({
				order : [
					['title','ASC']
				],
			})
			.then(products => {
				return res.render('products',{
			products,
			toThousand
			})

		});
		},

	// Detail - Detail from one product
	detail : (req, res) => {
		
		db.products.findOne({
			where : {
				id : req.params.id
			},
			include : [
				{
					association : 'category'
				},
					{association : 'image'}
			]
		})
		.then(product => {
			return res.render('productDetails',{
			product,
			toThousand,
			title:'detalles de producto',
		});	
		});
		},

	// Create - Form to create
	create: (req, res) => {
		db.categories.findAll()
		.then(categories => {
			res.render('productAdd');
		})
		.catch(error => res.send(error));
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const {name, description, price, discount, category, images}=req.body

		db.products.create({
			name,
			price,
			description,
			discount,
			categories_id : category,
			images
		})
		.then(newProduct => {
			res.redirect('/products');
		})
		.catch(error => res.send(error));
		},

	// Update - Form to edit
	edit: (req, res) => {

		let product = db.products.findByPk(req.params.id)
		let categories = db.categories.findAll()
		Promise.all([product,categories])
		.then(product =>{
		res.render('productEdit',{
			product
		});
	 	})
		.catch(error => res.send(error)) 
	},
	// Update - Method to update
	update: (req, res) => {

		const {name, description, price, discount, categories_id}=req.body

		db.products.update({
			name,
			price,
			description,
			discount,
			categories_id
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

		productos.forEach(producto => {
	
			db.products.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(result => {
				res.redirect('/products');
			});
		})	
		.catch(error => res.send(error));
	},


	search : (req,res)=>{

		db.products.findAll({
			where : {
				title : {
					[Op.like] : `%${req.query.search}%`
				}
			}
		})
		.then(resultado => {
			return res.render('products',{
			title: 'Resultado de la busqueda',
			productos : resultado,
		});
		})
		.catch(error => res.send(error))
	}
}
