'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Carts', { 
      fields: ['orderId'],
      type: 'foreign key',
      name: 'fk_cart_orders_order',
      references : {
        table: 'Orders',
        field : 'id'
      }
     });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeConstraint('Carts','fk_cart_orders_order');
  
  }
};
