'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      avatar: {
        type: Sequelize.STRING,

      },
      rol: {
        type: Sequelize.INTEGER,
      },
      addressId: {
          type: Sequelize.INTEGER,
          references : {
            model: {
              tableName : 'Addresses'
            },
            key :'id'
          }
      },
      cardId: {
        type: Sequelize.INTEGER,
          references : {
            model: {
              tableName : 'Cards'
            },
            key :'id'
          }
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};