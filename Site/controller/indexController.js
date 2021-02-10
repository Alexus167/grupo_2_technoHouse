const controller = {
    index: (req, res)=>{
       return res.render('home', {
         title: 'asdf',
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

    iniciar: (req, res) => {
      res.render('iniciar', {
        title:'iniciar',
      })
    }
}





module.exports= controller;
