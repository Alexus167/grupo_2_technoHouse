const db = require('../database/models');
const { getProducts } = require('../data/productos');
const { Op, Sequelize } = require('sequelize');

const productos = getProducts()

module.exports = {
  index: (req, res) => {
    let visitados = db.Product.findAll({
      limit: 4,
      order: Sequelize.literal('rand()'),
    });
    let enOferta = db.Product.findAll({
      limit: 4,
      where: {
        discount: {
          [Op.gt]: 10
        }
      },


    })
    Promise.all([visitados, enOferta])
      .then(([visitados, enOferta]) => {
        !req.session.cart ? req.session.cart = [] : null
        return res.render('home', {
          title: "TechnoHouse",
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
        { association: 'categories' }
      ]
      })
      Promise.all([buscar, resultado])
      .then(([buscar, resultado]) => {
        !req.session.cart ? req.session.cart = [] : null
        return res.render('home', {
          title: "Busqueda",
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
      title: "Envío"
    })
  },
  productDetails: (req, res) => {
    res.render('productDetails', {
      title: "Información del producto"
    })
  },

  productAdd: (req, res) => {
    res.render('productAdd', {
      title: 'Administración',
    })
  },

  formularioPago: (req, res) => {
    res.render('formularioPago', {
      title: 'Formas de pago',
    })
  },



}


