'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(125),
      unique: true,
      allowNull: false,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    booksId: DataTypes.ARRAY
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Book, { foreignKey: 'booksId' })
  };
  return User;
};