'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt')

const cards = [...Array(3)].map(card => (
  {
    userNumber : faker.finance.creditCardNumber(),
    expirationDate : faker.date.future(),
    securityCode : bcrypt.hashSync('1231',12),
    createdAt : new Date(),
    updatedAt : new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('cards', cards, {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('cards', null, {});
  
  }
};