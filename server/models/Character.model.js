import { DataTypes } from "sequelize";
import database from "../database.js";

const Character = database.define("Character", {
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
  skills: DataTypes.JSON, // DataTypes.ARRAY(DataTypes.STRING) non dispo en mysql
  //items: ?, //TODO
  money: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
//skills: ?, // TODO

export default Character;
