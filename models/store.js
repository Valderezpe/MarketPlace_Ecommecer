'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stores extends Model {
 
    static associate(models) {
   
    }
  }
  Stores.init({
    lojistas: DataTypes.STRING,
    loja: DataTypes.STRING,
    slug: DataTypes.STRING,
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};