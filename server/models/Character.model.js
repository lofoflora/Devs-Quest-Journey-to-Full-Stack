import Sequelize from 'sequelize';
import database from '../database.js';

const Character = database.define('Character', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialization: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  level: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  experience: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  skills: {}, // TODO
  items: {}, //TODO
  money: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

export default Character;
