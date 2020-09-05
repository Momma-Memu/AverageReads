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
      author: {
        allowNull: false,
        type: Sequelize.STRING(125)
      },
      rating: {
        allowNull: false,
        type: Sequelize.NUMERIC(3, 2)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE
      },
      publisher: {
        allowNull: false,
        type: Sequelize.STRING(125)
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
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