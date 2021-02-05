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
    }
}





module.exports= controller;