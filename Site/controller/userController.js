const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer')
const { getUsers, setUsers} = require('../data/users');


const users = getUsers();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/avatares')
  },
  filename: (req, file, cb) => {
    cb(null,'avatar-' + Date.now() + path.ToFileURL.extname(file.originalname))
 },
});
const upload = multer({storage});

module.exports={
    
    iniciar: (req, res) => {
        res.render('iniciar', {
          title:'iniciar',
        })
      },
      processIniciar: (req,res) => {
        const {email, pass} = req.body;

        let result = users.find(user => user.email === email.trim())

        if (result) {
          if (bcrypt.compareSync(pass.trim(),result.pass)) {
            return res.redirect('/products')
          }else{
            res.render('/users/iniciar',{
              error: "Datos incorrectos"
            })
          }
        }else{
          res.render('/users/iniciar',{
            error: "Datos incorrectos"
          })
        }
      },
      registro: (req, res) => {
        res.render('registro', {
          title: 'registro'
        })
      },
      processRegistro: (req,res) => {
        const {first_name, last_name, email, pass, avatar} = req.body;

        let lastID = 1;
        if (!first_name || !last_name || !email || !pass) {
          return res.redirect('/users/registro')
        }

        let result = users.find(user => user.email === email.trim())
        if (result) {
          return res.render('users/registro',{
            error: "El usuario ya esta registrado"
          })
        }
        users.forEach(user => {
          if (user.id>lastID) {
            lastID=user.id
          }
        });

        let passHash = bcrypt.hashSync(pass.trim(),12)


        const newUser = {
          id: +lastID + 1,
          first_name: first_name.trim(),
          last_name: last_name.trim(),
          email: email.trim(),
          pass: pass.trim(),
          avatar: req.files[0].filename
        }
        users.push(newUser);

        setUsers(users);
        res.redirect('/users/iniciar');
      },
}