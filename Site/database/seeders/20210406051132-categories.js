'use strict';

const names = ['arduino','modulos','sensores','accesorios','servosymotores','leds','componentes'];
const categories = [];

names.forEach(name => {
  const category = {
    name,
    createdAt : new Date(),
    updatedAt : new Date()
  }
  categories.push(category)
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};