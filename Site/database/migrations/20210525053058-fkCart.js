'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Carts', { 
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_cart_users_user',
      references : {
        table: 'Users',
        field : 'id'
      }
     });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeConstraint('Carts','fk_cart_users_user');

  }
};
