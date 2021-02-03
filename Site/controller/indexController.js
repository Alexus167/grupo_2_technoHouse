const products=require('../data/productos')

const controller = {
    index: (req, res)=>{
       return res.render('home', {
            title: 'Technohome',
            mensaje: 'tenemos lo que necesitas',
        })
    },
    search: (req, res) => {
		const { search } = req.query;

		const productFilter = product.filter((product) => {
			return product.name.tolowerCase().includes(search.tolowerCase());
		});
		res.render('result',{
			products:productFilter,
			search,
			toThousand
		})
	},
}
module.exports= controller;