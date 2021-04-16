'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

const users = [...Array(3)].map(user => (
  {
    name : faker.name.firstName(),
    lastname : faker.name.lastName(),
    email : faker.internet.email(),
    password : bcrypt.hashSync('123123',12),
    avatar : faker.image.avatar(),
    rol : 0,
    addressId : faker.random.number({min:1,max:3}),
    cardId : faker.random.number({min:1,max:3}),
    createdAt : new Date(),
    updatedAt : new Date()
  }
  
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Users', users, {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Users', null, {});
  
  }
};