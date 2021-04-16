'use strict';

const faker = require('faker');

const addresses = [...Array(3)].map(address => (
  {
    street : faker.address.streetName(),
    number : faker.random.number(9999),
    city : faker.address.city(),
    state : faker.address.state(),
    zipCode: 1111,
    createdAt : new Date(),
    updatedAt : new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Addresses', addresses, {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Addresses', null, {});
  
  }
};