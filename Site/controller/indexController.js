const db = require('../database/models');
const { getProducts } = require('../data/productos');
const { Op, Sequelize } = require('sequelize');

const productos = getProducts()

module.exports = {
  index: (req, res) => {
    let visitados = db.Product.findAll({
      limit: 4,
      order: Sequelize.literal('rand()'),
      include: [
        { association: 'images' }
      ]
    });
    let enOferta = db.Product.findAll({
      limit: 4,
      where: {
        discount: {
          [Op.gt]: 10
        }
      },
      include: [
        { association: 'images' }
      ]


    })
    Promise.all([visitados, enOferta])
      .then(([visitados, enOferta]) => {
        return res.render('home', {
          enOferta,
          visitados,
        });
      })
      .catch(error => console.log(error));
  },
  show: (req, res) => {
    let productos = productos.find(product => {
      return product.id == req.params.id
    });
    res.render('productsDetail', {
      title: "Vista de detalle",
      producto
    });
  },
  search: (req, res) => {

    const buscar = req.query.buscar;

    const resultado = db.Product.findAll({
      order: Sequelize.literal('rand()'),
      include: [
        { association: 'images' },
        { association: 'categories' }
      ]
      })
      Promise.all([buscar, resultado])
      .then(([buscar, resultado]) => {
        return res.render('home', {
          buscar,
          resultado,
        });
      })
      .catch(error => console.log(error));
  },
   /*  const buscar = req.query.buscar;

    const resultado = productos.filter(product => {
      return product.category.includes(buscar)
    })

    res.render('productos', {
      title: "Resultado de la búsqueda",
      productos: resultado
    })
  }, */

  cart: (req, res) => {
    res.render('cart', {
      title: "Carrito"
    })
  },
  shipping: (req, res) => {
    res.render('shipping', {
      title: "envio"
    })
  },
  productDetails: (req, res) => {
    res.render('productDetails', {
      title: "Informacion del producto"
    })
  },

  productAdd: (req, res) => {
    res.render('productAdd', {
      title: 'Administracion',
    })
  },

  formularioPago: (req, res) => {
    res.render('formularioPago', {
      title: 'Formulario',
    })
  },



}


