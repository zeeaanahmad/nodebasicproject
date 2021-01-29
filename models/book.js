'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Book.belongsTo(models.Author);
      Book.belongsTo(models.Author);
    }
  };
  Book.init({
    title: { type:DataTypes.STRING,allowNull: false },
    AuthorId: { type:DataTypes.INTEGER,allowNull: false },
    summary: DataTypes.STRING,
    isbn: DataTypes.STRING,
    genre: DataTypes.STRING,
    url: {
      type: DataTypes.VIRTUAL,
      get() {
          return '/catalog/book/' + this._id;
      },
  },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};