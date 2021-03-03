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
          return res.render('/users/iniciar',{
            errors : errors.mapped
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

            if(recordar != 'undefined'){
              res.cookie('user',req.session.user,{
                maxAge : 1000 * 60
              })
            }

            return res.redirect('/products')
          }
        }
            res.render('/users/iniciar',{
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
          return res.render('/users/registro',{
            errors : errors.mapped
          })
        }

        const {first_name, last_name, email, pass, avatar} = req.body;

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

      logout: (req,res) => {
        req.session.destroy();
        if(req.cookies.user){
          res.cookie('user','', {maxAge : -1})
        }
        res.redirect('/')
      }
}