const Sequelize = require('sequelize');
require('dotenv').config();

// module.exports = new Sequelize(process.env.DATABASE_URL, {
// 	dialect: 'postgres',
// 	protocol: 'postgres',
// 	dialectOptions: {
// 		ssl: true
// 	},
// 	operatorsAliases: Sequelize.Op
// });

module.exports = new Sequelize('tread', 'tylernoseworthy', 'root', {
	host: 'localhost',
	dialect: 'postgres',
	port: 5432,
	operatorsAliases: false,
	logging: false
});
