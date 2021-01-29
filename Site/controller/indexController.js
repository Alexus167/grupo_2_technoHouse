module.exports = {
    index: (req, res)=>{
        res.render('home', {
            title: 'Technohome',
            mensaje: 'tenemos lo que necesitas',
        })
    },
}