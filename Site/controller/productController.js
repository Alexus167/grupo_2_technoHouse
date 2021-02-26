const productos = require('../data/productos');
const fs = require('fs');
const { stringify } = require('querystring');

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
		const id=req.params.productId;

		const producto=productos.find(producto=>{
			return producto.id===+id
		});

		const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

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
	store: (req, res) => {
		let lastID = 1;
		productos.forEach(producto => {
			if (producto.id>lastID) {
				lastID=auto.id
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
			image
		}

		productos.push(producto);
		fs.writeFileSync('./data/productos_db.json', stringify(productos),'utf-8')

		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {

		const producto = productos.find(producto=>producto.id ===+req.params.id  )

		res.render('productEdit',{
			producto
		});
	},
	// Update - Method to update
	update: (req, res) => {
		const {name, description, price, discount, category, image}=req.body

		productos.forEach(producto => {
			if (producto.id ===+req.params.id) {
				producto.id =+req.params.id;
				producto.name = name;
				producto.description = description;
				producto.price = price;
				producto.discount = discount;
				producto.category = category;
				producto.image	= image;
				}

				fs.writeFileSync('./data/productos_db.json', stringify(productos),'utf-8')
				res.redirect('/products');		
		});

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		productos.forEach(producto => {
			if (producto.id ===+ req.params.id) {
				let eliminar = productos.indexOf(producto);
				productos.splice(eliminar,1)
			}

			
			fs.writeFileSync('./data/productos_db.json', stringify(productos),'utf-8')
			res.redirect('/products');	
		});
		
	}
};

