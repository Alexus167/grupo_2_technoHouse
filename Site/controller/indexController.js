const db = require('../database/models');
const {getProducts}=require('../data/productos')
const productos=getProducts()

module.exports= {
  index: (req, res) => {
    const enOferta = productos.filter((product) => {
      return product.category === 'arduino'
    });
    const visitados = productos.filter((product) => {
      return product.category === 'modulos'
    });
    res.render('home', {
      enOferta,
      visitados,
    });
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

    const resultado = productos.filter(product => {
      return product.category.includes(buscar)
    })

    res.render('productos', {
      title: "Resultado de la búsqueda",
      productos: resultado
    })
  },

    cart: (req,res)=> {
      res.render('cart', {
        title: "Carrito"
      })
      },
    shipping: (req,res)=> {
      res.render('shipping', {
          title: "envio"
      })
    },
    productDetails: (req,res)=> {
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


