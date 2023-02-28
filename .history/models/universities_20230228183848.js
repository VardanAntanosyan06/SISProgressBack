'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Universities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Universities.init({
    name: DataTypes.STRING,
    history: DataTypes.STRING,
    facts: DataTypes.ARRAY(DataTypes.STRING),
    alumni: DataTypes.ARRAY(DataTypes.STRING),
    advice: DataTypes.ARRAY(DataTypes.STRING),
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Universities',
  });
  return Universities;
};