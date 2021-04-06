const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const {validationResult} = require('express-validator');

const { getUsers, setUsers} = require('../data/users');


const users = getUsers();


const db = require('../database/models');



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
        /* let errors = validationResult(req); */

    /*     if (!errors.isEmpty()) {
          return res.render('registro',{
            errors : errors.mapped()
          })
        }
 */

       

        const {firstName, lastName, email, password} = req.body;
        let passHash = bcrypt.hashSync(password.trim(),12)


        db.users.create({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          password: passHash,

        })
        .then(result => {
          return res.redirect('/users/iniciar');
        })
        .catch(errores)

      /*   let lastID = 0
        users.forEach(user => {
          if (user.id>lastID) {
            lastID=user.id
          }
        });
 */


       /*  const newUser = {
          id: +lastID + 1,
          first_name: first_name.trim(),
          last_name: last_name.trim(),
          email: email.trim(),
          pass: passHash,
          avatar: req.files[0].filename,
          admin: false,
        }
        users.push(newUser); */

        setUsers(users);
        
      },

      edit: (req, res) => {

        let user = db.user.findByPk(req.params.id)
        let cards = db.cards.findAll()
        let adress = db.adress.findAll()
        Promise.all([user,cards,adress])
        .then(user =>{
        res.render('perfil',{
          user
        });
         })
        .catch(error => res.send(error)) 
      },

      update: (req, res) => {

        const {firstName, lastName, email, password, adresses_id, cards_id}=req.body
    
        db.users.update({
          firstName,
          lastName,
          email,
          password,
          adresses_id,
          cards_id
        },
        {
          where : {
            id : req.params.id
          }
        })
        .then(result => {
          res.redirect('perfil');	
        })
        
      },


      logout: (req,res) => {
        req.session.destroy();
        if(req.cookies.user){
          res.cookie('user','', {maxAge : -1})
        }
        res.redirect('/')
      },

      destroy: (req, res) => {

        users.forEach(user => {
      
          db.user.destroy({
            where : {
              id : req.params.id
            }
          })
          .then(result => {
            res.redirect('/');
          });
        })	
        .catch(error => res.send(error));
      },
}