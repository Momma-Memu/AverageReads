'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    rating: {
      type: DataTypes.NUMERIC[3, 2],
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
    Book.hasMany(models.Comment, { foreignKey: 'bookId ' });
    Book.hasMany(models.Bookshelf, { foreignKey: 'bookId ' });
  };
  return Book;
};