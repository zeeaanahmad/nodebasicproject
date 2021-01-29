'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookInstance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // BookInstance.belongsTo(models.Book);
    }
  };
  BookInstance.init({
    book: DataTypes.STRING,
    imprint: DataTypes.STRING,
    status: DataTypes.STRING,
    due_back: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BookInstance',
  });
  return BookInstance;
};