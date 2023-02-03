"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
      }, 
      phone:{
        type: Sequelize.INTEGER,
      },
      age:{
        type: Sequelize.DATE,
      },
      country: {
        type:Sequelize.STRING
      },
      grade: {
        type: Sequelize.INTEGER,
      },
      university:{
        type:Sequelize.STRING
      },
      academicProgram: {
        type :Sequelize.STRING
      },
      study:{
        type:Sequelize.STRING
      },
      termOption:{
        type:Sequelize.STRING
      },
      planType: DataTypes.STRING,
      aid: DataTypes.BOOLEAN,
      legacy: DataTypes.BOOLEAN,
      area:DataTypes.STRING,
      applyingFrom: DataTypes.BOOLEAN,
      testSubmit: DataTypes.STRING,
      recentSchool: DataTypes.STRING,
      activityName: DataTypes.STRING, 
      workExperience: DataTypes.STRING,
      addinfo: DataTypes.BOOLEAN,
      moreInfo: DataTypes.STRING,
      token:DataTypes.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
