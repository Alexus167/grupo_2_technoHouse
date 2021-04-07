'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addConstraint('images', { 
       fields: ['productId'],
       type: 'foreign key',
       name: 'fk_image_products_product',
       references : {
         table: 'products',
         field : 'id'
       }
      });
      
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.removeConstraint('products','fk_image_products_product');
    
  }
};