'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('meetup', 'Meetups');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Meetups', 'meetup');
  },
};
