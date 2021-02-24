module.exports={
    
    iniciar: (req, res) => {
        res.render('iniciar', {
          title:'iniciar',
        })
      },
      signUp: (req,res) => {
        res.render('signUp', {
          title: 'Registrate',
        })
      }
}