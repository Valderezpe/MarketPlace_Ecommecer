'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
    
    }
  }
  Product.init({
    loja: DataTypes.STRING,
    categoria: DataTypeS.STRING,
    produto: DataTypes.STRING,
    slug: DataTypes.STRING,
    preco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};