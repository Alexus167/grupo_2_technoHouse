module.exports={
    
    iniciar: (req, res) => {
        res.render('iniciar', {
          title:'iniciar',
        })
      },

      registro: (req, res) => {
        res.render('registro', {
          title: 'registro'
        })
      }
}