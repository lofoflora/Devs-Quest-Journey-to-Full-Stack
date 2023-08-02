import { DataTypes } from 'sequelize';
import database from '../database.js';

const Character = database.define('Character', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  experience: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  money: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  });
  //skills: ?, // TODO




  const Item = database.define('Item', {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bonus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    malus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  price: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Character;
