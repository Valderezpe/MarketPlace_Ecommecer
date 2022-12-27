'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
   
    static associate(models) {
     
    }
  }
  category.init({
    loja: DataTypes.STRING,
    categoria: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};