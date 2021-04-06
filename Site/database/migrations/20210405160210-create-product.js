'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
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
      description: {
        type: Sequelize.STRING,
        allowNull : false

      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      discount: {
        type: Sequelize.INTEGER
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : {
            taleName : 'Images'
          },
          key :'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : {
            taleName : 'Categories'
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
    await queryInterface.dropTable('Products');
  }
};