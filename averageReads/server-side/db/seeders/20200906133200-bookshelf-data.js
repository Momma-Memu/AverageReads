'use strict';

// updated bookids to use valid books in mydb

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookshelves', [
      {
        userId: 1,
        bookId: 88,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        bookId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        bookId: 126,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        bookId: 104,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        bookId: 81,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        bookId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        bookId: 17,
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
