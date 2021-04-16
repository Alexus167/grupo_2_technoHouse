'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addConstraint('Products', { 
       fields: ['categoryId'],
       type: 'foreign key',
       name: 'fk_product_categories_category',
       references : {
         table: 'Categories',
         field : 'id'
       }
      });
      
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.removeConstraint('Categories','fk_product_categories_category');
    
  }
};