'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SubTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubTasks.init({
    taskId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    points: DataTypes.INTEGER,
    userId:DataTypes.STRING,
    done:DataTypes.BOOLEAN,
    description:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SubTasks',
  });
  const Calendar = sequelize.define("Calendar")

  SubTasks.hasOne(Calendar,{
    foreignKey:"taskId"
  })  
  return SubTasks;
};