'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemons.init({
    num_cd: DataTypes.STRING,
    name: DataTypes.STRING,
    type_one: DataTypes.STRING,
    type_two: DataTypes.STRING,
    sprite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemons',
  });
  return Pokemons;
};