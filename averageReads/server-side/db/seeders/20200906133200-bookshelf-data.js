'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookshelves', [
      {
        userId: 2,
        bookId: 65,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        bookId: 61,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        bookId: 65,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        bookId: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        bookId: 94,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        bookId: 65,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        bookId: 88,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        bookId: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookshelves', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
