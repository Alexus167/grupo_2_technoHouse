'use strict';

const faker = require('faker');

const images = [...Array(10)].map(image => (
  {
    file : faker.image.business(),
    productId : faker.random.number({min:1,max:10}),
    createdAt : new Date(),
    updatedAt : new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('images', images, {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('images', null, {});
  
  }
};