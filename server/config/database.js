const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize('tread', 'tylernoseworthy', 'root', {
	host: 'localhost',
	dialect: 'postgres',
	port: 5432,
	operatorsAliases: false,
	logging: false
});
