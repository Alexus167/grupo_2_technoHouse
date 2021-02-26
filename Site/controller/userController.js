module.exports={
    
    iniciar: (req, res) => {
        res.render('iniciar', {
          title:'iniciar',
        })
      },
      processIniciar: (req,res) => {
        res.send(req,body)
      },
      registro: (req, res) => {
        res.render('registro', {
          title: 'registro'
        })
      },
      processRegistro: (req,res) => {
        res.send(req,body)
      }
}