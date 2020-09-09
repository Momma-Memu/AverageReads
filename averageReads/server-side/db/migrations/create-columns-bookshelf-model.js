const { BOOLEAN } = require("sequelize");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn('Bookshelves', 'reading', {
            type: BOOLEAN,
            defaultValue: false
        })
            .then(_ => queryInterface.addColumn('Bookshelves', 'haveRead', {
                type: BOOLEAN,
                defaultValue: false
            }))
            .then(_ => queryInterface.addColumn('Bookshelves', 'wantsToRead', {
                type: BOOLEAN,
                defaultValue: false
            }));
    },

    down: function (queryInterface, _Sequelize) {
        return queryInterface.removeColumn('Bookshelves', 'reading')
            .then(_ => queryInterface.removeColumn('Bookshelves', 'haveRead'))
            .then(_ => queryInterface.removeColumn('Bookshelves', 'wantsToRead'));
    },
};