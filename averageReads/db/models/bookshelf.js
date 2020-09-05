'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  Bookshelf.associate = function (models) {
    // associations can be defined here
    Bookshelf.belongsTo(models.Book, { foreignKey: 'bookId ' });
    Bookshelf.hasMany(models.User, { foreignKey: 'userId ' });
  };
  return Bookshelf;
};