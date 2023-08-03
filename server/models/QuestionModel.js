import { Model, DataTypes } from 'sequelize';
import database from '../database.js';

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    options: {
      type: DataTypes.JSON, //ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    correctOption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: 'Question',
  }
);

export default Question;
