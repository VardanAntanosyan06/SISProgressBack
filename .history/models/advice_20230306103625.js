'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Advice.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    univeristyId:DataTypes.
  }, {
    sequelize,
    modelName: 'Advice',
    timestamps:false
  });
  return Advice;
};