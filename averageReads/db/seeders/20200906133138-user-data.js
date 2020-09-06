'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John Doe',
        email: 'john@email.com',
        hashedPassword: 'ajd39jd02f20j',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Jonah Poe',
        email: 'jonah@email.com',
        hashedPassword: 'aasdjd39jd02f20j',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        username: 'Gina Moe',
        email: 'gina@email.com',
        hashedPassword: 'a2e2jd39jd02f20j',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Tine Toe',
        email: 'tina@email.com',
        hashedPassword: 'ajd3aw39jd02f20j',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Malick Maloe',
        email: 'malick@email.com',
        hashedPassword: 'ajcdd39jd02f20j',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
