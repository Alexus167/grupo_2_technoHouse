'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Carts', { 
      fields: ['productId'],
      type: 'foreign key',
      name: 'fk_cart_products_product',
      references : {
        table: 'Products',
        field : 'id'
      }
     });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeConstraint('Carts','fk_cart_products_product');

  }
};
