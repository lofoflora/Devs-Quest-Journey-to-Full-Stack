import Sequelize from 'sequelize';

const database = new Sequelize('devsQuest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default database;