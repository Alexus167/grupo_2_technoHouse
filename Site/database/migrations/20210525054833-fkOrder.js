'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Orders', { 
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_order_users_user',
      references : {
        table: 'Users',
        field : 'id'
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.removeConstraint('Orders','fk_order_users_user');


  }
};
