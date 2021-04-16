'use strict';

const faker = require('faker');

const products = [...Array(10)].map(product => (
  {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    discount: faker.random.number({min:10,max:50}),
    image: faker.image.business({min:1,max:10}),
    categoryId: faker.random.number({min:1,max:7}),
    createdAt : new Date(),
    updatedAt : new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Products', products, {});
  
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Products', null, {});
  
  }
};