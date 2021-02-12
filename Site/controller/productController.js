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

		/*const product=products.find(product=>{
			return product.id===+id
		});*/

		res.render('productDetails',{
			/*product,
			toThousand,*/
			title:'detalles de producto',
		});
		},

	// Create - Form to create
	create: (req, res) => {
		res.render('productAdd');
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