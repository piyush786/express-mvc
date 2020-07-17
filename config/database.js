const { Sequelize } = require('sequelize');
const config = require('./config.json');
const sequelize = new Sequelize(config.database.db , config.database.username, config.database.password, {
    host: config.database.host,
    dialect: config.database.dbType
  });


  exports.connection = async function () {
    try {
        await sequelize.authenticate();
        console.log('Database Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }    
}

exports.sequelize = sequelize 