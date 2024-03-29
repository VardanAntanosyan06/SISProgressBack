'use strict';

const notableAlumni = require("../utils/data/notablealumni").notableAlumni

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NotableAlumnis',notableAlumni)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('NotableAlumnis', null, {});
  }
};