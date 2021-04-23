'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Usuarios', 'contrasenia', 'password');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Usuarios', 'password', 'contrasenia');
  },
};
