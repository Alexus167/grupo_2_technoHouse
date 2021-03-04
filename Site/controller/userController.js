const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const {validationResult} = require('express-validator');

const { getUsers, setUsers} = require('../data/users');


const users = getUsers();



module.exports={
    
    iniciar: (req, res) => {
        res.render('iniciar', {
          title:'iniciar',
        })
      },
      processIniciar: (req,res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.render('iniciar',{
            errors : errors.mapped()
          })
        }
        const {email, pass, recordar} = req.body;

        let result = users.find(user => user.email === email.trim())

        if (result) {
          if (bcrypt.compareSync(pass.trim(),result.pass)) {

            req.session.user = {
              id : result.id,
              email : result.email
            }

            if(recordar){
              res.cookie('user',req.session.user,{
                maxAge : 1000 * 60 * 60 * 24 * 7 * 30

              })
            }

            return res.redirect('/products')
          }
        }
            res.render('iniciar',{
              errors: {
                error: {
                  msg : "Datos incorrectos"
            } 
          }
        })
          
      },
      registro: (req, res) => {
        res.render('registro', {
          title: 'registro'
        })
      },
      processRegistro: (req,res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.render('registro',{
            errors : errors.mapped()
          })
        }

        const {first_name, last_name, email, pass, avatar, admin} = req.body;

        let lastID = 0
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
          pass: passHash,
          avatar: req.files[0].filename,
          admin: false,
        }
        users.push(newUser);

        setUsers(users);
        res.redirect('/users/iniciar');
      },

      logout: (req,res) => {
        req.session.destroy();
        if(req.cookies.user){
          res.cookie('user','', {maxAge : -1})
        }
        res.redirect('/')
      }
}