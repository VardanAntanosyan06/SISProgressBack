'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotableAlumni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotableAlumni.init({
    name:DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    univeristyId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NotableAlumni',
    timestamps:false
  });

  const Universities = sequelize.define("Universities")

  NotableAlumni.hasOne(Universities,{
    foreignKey:"id"
  })
  return NotableAlumni;
};