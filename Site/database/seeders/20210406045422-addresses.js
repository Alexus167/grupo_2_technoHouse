'use strict';

const faker = require('faker');

const addresses = [...Array(3)].map(address => (
  {
    street : faker.address.streetName(),
    number : faker.random.number(9999),
    city : faker.address.city(),
    state : faker.address.state(),
    zipCode: faker.address.zipCode(),
    createdAt : new Date(),
    updatedAt : new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('addresses', addresses, {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('addresses', null, {});
  
  }
};