const products=require('../data/productos');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products',{
			products,
			toThousand,
		});
		},

	// Detail - Detail from one product
	detail: (req, res) => {
		const id=req.params.id;

		const product=products.find(product=>{
			return product.id===+id
		});

		res.render('detail',{
			product,
			toThousand,
			title:'detalles de producto',
		});
		},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;