'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addConstraint('products', { 
       fields: ['categoryId'],
       type: 'foreign key',
       name: 'fk_product_categories_category',
       references : {
         table: 'categories',
         field : 'id'
       }
      });
      
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.removeConstraint('categories','fk_product_categories_category');
    
  }
};