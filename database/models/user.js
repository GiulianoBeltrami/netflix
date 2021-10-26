'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      // define association here
    }

    //funções de validação
  };
  user.init({
    email: { type:DataTypes.STRING, allowNull:false, unique:true },
    senha: { type:DataTypes.STRING, allowNull:false }
   },
   {
    sequelize,
    modelName: 'user'
  });
  return user;
};