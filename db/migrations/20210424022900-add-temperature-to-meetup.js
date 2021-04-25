'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('meetups', 'temperature', {
      type: Sequelize.STRING,
      allowNul: true,
      default: null,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('meetups', 'temperature');
  },
};
