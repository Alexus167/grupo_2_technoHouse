const {getProducts, setProdcts} = require('../data/productos');
const fs = require('fs');
const path = require('path');
const multer = require('multer')
const { stringify } = require('querystring');
const { pathToFileURL } = require('url');

const productos = getProducts();
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');


module.exports = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products',{
			productos,
			toThousand,
		});
		},

	// Detail - Detail from one product
	detail: (req, res) => {
		/* const id=req.params.productId;

		const producto=productos.find(producto => {
			return producto.id===+id */
		const producto = productos.find(producto =>{
			return producto.id == req.params.id
		});	
		

		
		res.render('productDetails',{
			producto,
			toThousand,
			title:'detalles de producto',
		});
		},

	// Create - Form to create
	create: (req, res) => {
		res.render('productAdd');
	},
	
	// Create -  Method to store
	store: (req, res, nexr) => {
		let lastID = 1;
		productos.forEach(producto => {
			if (producto.id>lastID) {
				lastID=producto.id
			}
		});

		const {name, description, price, discount, category, image}=req.body

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
		setProdcts(producto);

		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {

		const producto = productos.find(producto=>producto.id ===+req.params.id)
		
		res.render('productEdit',{
			producto
		});
	},
	// Update - Method to update
	update: (req, res, next) => {
		const {name, description, price, discount, category, image}=req.body

		productos.forEach(producto => {
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
				}
				setProdcts(producto);
				res.redirect('/products');		
		});

	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		productos.forEach(producto => {
			if (producto.id ===+ req.params.id) {

				if (fs.existsSync(path.join('public','images','productos',producto.image))) {
					fs.unlinkSync(path.join('public','images','productos',producto.image));
				}
				let eliminar = productos.indexOf(producto);
				productos.splice(eliminar,1)
			}

			});
			setProdcts(producto)
			res.redirect('/products');	
		
	},

	search:(req,res)=>{
		const buscar = req.query.search

		const resultado = productos.filter(producto=>{
			return producto.name.includes(buscar)
		})

		res.render('products',{
			title: 'Resultado de la busqueda',
			productos : resultado,
		});
	},
}
