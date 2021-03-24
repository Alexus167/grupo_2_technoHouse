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
			})
		/* 
			/*toThousand,*/
		//}); */
		});
		},

	// Detail - Detail from one product
	detail : (req, res) => {
		/* const id=req.params.productId;

		const producto=productos.find(producto => {
			return producto.id===+id */
		/* const producto = productos.find(producto =>{
			return producto.id == req.params.id
		});	 */
		
		db.products.findOne({
			where : {
				id : req.params.id
			},
			include : [
				{
					association : 'category'
				}
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
		/* let lastID = 1;
		productos.forEach(producto => {
			if (producto.id>lastID) {
				lastID=producto.id
			}
		});
		*/
		const {name, description, price, discount, category}=req.body

		db.products.create({
			name,
			price,
			description,
			discount,
			categories_id : category
		})
		.then(newProduct => {
			res.redirect('/products');
		})
		.catch(error => res.send(error));
		/*
		let producto = {
			id: lastID + 1,
			name,
			description,
			price,
			discount,
			category,
			image : req.files[0].filename
		}

		productos.push(producto);
		setProdcts(productos); */

		
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
		
/* 		const {name, description, price, discount, categories_id, image}=req.body
 */
		/* productos.forEach(producto => {
			if (producto.id ===+req.params.id) {
				if (fs.existsSync(path.join('public','images','productos',producto.image))) {
					fs.unlinkSync(path.join('public','images','productos',producto.image));
				}
				producto.id =+req.params.id;
				producto.name = name;
				producto.description = description;
				producto.price = price;
				producto.discount = discount;
				producto.category = category;
				producto.image	= req.files[0].filename;
				} */
					

		/* setProdcts(productos); */
				

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

	/* 	if (producto.id ===+ req.params.id) {

				if (fs.existsSync(path.join('public','images','productos',producto.image))) {
					fs.unlinkSync(path.join('public','images','productos',producto.image));
				}
				let eliminar = productos.indexOf(producto);
				productos.splice(eliminar,1)
			}

			});
			setProdcts(producto)
				
		 */


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
	/* const buscar = req.query.search

		const resultado = productos.filter(producto=>{
			return producto.name.includes(buscar)
		})

		res.render */
}
