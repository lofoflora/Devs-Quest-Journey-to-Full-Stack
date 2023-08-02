import { DataTypes } from "sequelize";
import database from "../database.js";

const Skills = database.define("Skills", {
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

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

export default Skills;
