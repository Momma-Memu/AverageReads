'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.Book, { foreignKey: 'bookId' });
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Comment;
};