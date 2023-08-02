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
  skills: {
    type: Sequelize.JSON, // we store skills and their levels in a JSON object
  },
  items: {
    type: Sequelize.JSON, // we store items and their quantities in a JSON object
  },
});

export default Character;
