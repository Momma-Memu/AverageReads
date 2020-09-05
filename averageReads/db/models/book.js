'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(125),
      unique: true,
      allowNull: false,
    },
    releaseDate: DataTypes.DATE,
    publisher: {
      type: DataTypes.STRING(125),
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pageCount: DataTypes.INTEGER
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
    Book.hasMany(models.Comment, { foreignKey: 'bookId' });
    Book.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Book;
};