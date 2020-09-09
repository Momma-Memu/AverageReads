'use strict';
// const bcrypt = require("bcryptjs");


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(125),
      allowNull: false,
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Comment, { foreignKey: 'userId ' });
    User.hasMany(models.Bookshelf, { foreignKey: 'userId ' });
  };
  // User.prototype.validatePassword = function (password) {
  //   // because this is a model instance method, `this` is the user instance here:
  //   return bcrypt.compareSync(password, this.hashedPassword.toString());

  return User;

};
