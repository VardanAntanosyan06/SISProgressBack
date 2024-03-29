"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserEmails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      password: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "Secondary",
      },
      token: {
        type: Sequelize.STRING,
      },
      tokenCreatedAt: {
        type: Sequelize.DATE,
        allowNull:true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserEmails");
  },
};
