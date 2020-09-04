'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      picture: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(125)
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      publisher: {
        allowNull: false,
        type: Sequelize.STRING(125)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      pageCount: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};