'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: DataTypes.STRING,
    rating: DataTypes.NUMERIC,
    description: DataTypes.STRING,
    published: DataTypes.DATE,
    publisher: DataTypes.STRING,
    image: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
    Book.hasMany(models.Comment, { foreignKey: 'bookId ' });
    Book.hasMany(models.Bookshelf, { foreignKey: 'bookId ' });
  };
  return Book;
};