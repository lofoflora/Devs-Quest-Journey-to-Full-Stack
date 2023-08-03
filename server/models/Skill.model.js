import { DataTypes } from "sequelize";
import database from "../database.js";

const Skill = database.define("Skill", {
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

export default Skill;
