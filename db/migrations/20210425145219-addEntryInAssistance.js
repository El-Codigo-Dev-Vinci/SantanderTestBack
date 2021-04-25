'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('assistances', 'dateOfEntry', {
      type: Sequelize.DATE,
      default: null,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('assistances', 'dateOfEntry');
  },
};
