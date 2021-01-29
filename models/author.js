'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Book);
    }
  };
  Author.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { max: 100 }
  },
  family_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { max: 100 }
  },
  date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
  },
  date_of_death: {
      type: DataTypes.DATE,
      allowNull: true
  },
    name: {
      type: DataTypes.VIRTUAL,
      get: function() {
          return this.family_name + ', ' + this.first_name;
      },
  },
  lifespan: {
      type: DataTypes.VIRTUAL,
      get() {
          return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
      },
  },
  url: {
      type: DataTypes.VIRTUAL,
      get() {
          return '/catalog/author/' + this._id;
      },
  },
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};