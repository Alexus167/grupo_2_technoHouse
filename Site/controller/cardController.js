const db = require("../database/models");

module.exports = {
    root : (req,res) => {

    },
    detail : (req, res) => {
        db.Cards.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {
                    association : 'users'
                }
            ]
        })
        .then(cards => {
            return res.render('userCards',{
                cards
            })
        })
        .catch(error => res.send(error))
    }
}