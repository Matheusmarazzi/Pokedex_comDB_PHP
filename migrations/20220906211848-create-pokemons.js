'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_cd: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      type_one: {
        type: Sequelize.STRING
      },
      type_two: {
        type: Sequelize.STRING
      },
      sprite: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemons');
  }
};