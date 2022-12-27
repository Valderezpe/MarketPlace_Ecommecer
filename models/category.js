'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
   
    static associate(models) {
     
    }
  }
  Category.init({
    loja: DataTypes.STRING,
    categoria: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};