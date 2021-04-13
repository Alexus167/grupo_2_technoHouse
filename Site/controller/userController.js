const db = require('../database/models');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');




module.exports = {

  iniciar: (req, res) => {
    res.render('iniciar', {
      title: 'iniciar',
    })
  },
  processIniciar: (req, res) => {
    let errores = validationResult(req);
        const { email, password, recordar } = req.body;

        if (!errores.isEmpty()) {
            return res.render('iniciar', {
                errores: errores.mapped(),
                data: req.body
            })
        } else {

            db.User.findOne({
                where: {
                    email
                }
            })
            .then((user) => {
                console.log(password)
                console.log(user.password)
                if (user && bcrypt.compareSync(password, user.password)) {
                  console.log(1);
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        lastname: user.lastname,
                        email: user.email,
                        perfil: user.avatar,
                        rol: user.rol,
                        card: user.cardId,
                        addresses: user.addressId
                    }
                    if (recordar) {
                        res.cookie('user', req.session.user, {
                            maxAge: 1000 * 60 * 60 * 24 * 100000
                        })
                    }
                    return res.redirect('/users/perfil')

                } else {
                  console.log(2);
                    return res.render('iniciar', {
                        errors: {
                            pass: {
                                msg: 'Credenciales inválidas'
                            }
                        },
                        data: req.body

                    })
                }
            })
            .catch(error => res.send(error))
        }
    },


   /*  let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('iniciar', {
        errors: errors.mapped()
      })
    }
    const { email, pass, recordar } = req.body;

    let result = users.find(users => user.email === email.trim())

    if (result) {
      if (bcrypt.compareSync(pass.trim(), result.pass)) {

        req.session.users = {
          id: result.id,
          email: result.email
        }

        if (recordar) {
          res.cookie('user', req.session.user, {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 30

          })
        }

        return res.redirect('/products')
      }
    }
    res.render('iniciar', {
      errors: {
        error: {
          msg: "Datos incorrectos"
        }
      }
    }) 
  }, */
  registro: (req, res) => {
    res.render('registro', {
      title: 'registro'
    })
  },
  processRegistro: (req, res) => {
     let errors = validationResult(req);

    if (!errors.isEmpty()) {
        var perfil = req.files[0].filename;

        const { name, lastname, email, password} = req.body;
        let passHash = bcrypt.hashSync(password.trim(), 12);

      db.User.create({
        name : name.trim(),
        lastname : lastname.trim(),
        email : email.trim(),
        password : passHash,
        avatar : perfil
      })
        .then(() => res.redirect('/users/iniciar'))
        .catch(error => res.send(error))
    } else {
      return res.render('registro', {
        errors: errors.mapped(),
        old: req.body
      })
    }
  },
  perfil: (req, res) => {
    db.User.findOne({
      where: {
          id : req.session.user.id
      }
  })
  .then(user => {
     res.render('perfil', {
      user : user
    })
  })
  .catch(error => res.send(error))
  },  
  edit: (req, res) => {

    let user = db.user.findByPk(req.params.id)
    let cards = db.cards.findAll()
    let adress = db.adress.findAll()
    Promise.all([user, cards, adress])
      .then(user => {
        res.render('perfil', {
          user
        });
      })
      .catch(error => res.send(error))
  },
  update: (req, res) => {

    const { name, lastname, email, password, avatar, addressId, cardId } = req.body

    db.users.update({
      name,
      lastname,
      email,
      password,
      avatar,
      addressId,
      cardId
    },
      {
        where: {
          id: req.params.id
        }
      })
      .then(result => {
        res.redirect('perfil');
      })

  },


  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.user) {
      res.cookie('user', '', { maxAge: -1 })
    }
    res.redirect('/')
  },

  destroy: (req, res) => {

    users.forEach(user => {

      db.user.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(result => {
          res.redirect('/');
        });
    })
      .catch(error => res.send(error));
  },
}