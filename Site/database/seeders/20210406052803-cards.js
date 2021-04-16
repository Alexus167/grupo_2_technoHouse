'use strict';

const cards = [...Array(3)].map(card => (
  {
    userNumber : 12345678,
    expirationDate : 2026,
    securityCode : 1234,
    createdAt : new Date(),
    updatedAt : new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Cards', cards, {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Cards', null, {});
  
  }
};