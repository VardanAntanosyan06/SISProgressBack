'use strict';
const UniversityTable = require("../utils/data/data").UniversityTable

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UniversityTables',UniversityTable)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UniversityTables', null, {});
  }
};
