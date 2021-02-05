const {getProducts}=require('../data/productos')

const productos=getProducts()

module.exports= {
  index: (req, res) => {
    res.render('home', {
      title: "Techno House",
      productos
    });
  },
  show: (req, res) => {
    let auto = autos.find(auto => {
      return auto.id == req.params.id
    });
    res.render('productsDetail', {
      title: "Vista de detalle",
      auto
    });
  },
  search: (req, res) => {
    const buscar = req.query.buscar;

    const resultado = autos.filter(auto => {
      return auto.modelo.includes(buscar)
    })

    res.render('autos', {
      title: "Resultado de la búsqueda",
      autos: resultado
    })
  }
};
