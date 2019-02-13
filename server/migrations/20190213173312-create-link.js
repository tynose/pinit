'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Links', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Users',
					key: 'id'
				}
			},
			photo_id: {
				unique: true,
				allowNull: false,
				type: Sequelize.STRING
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Links');
	}
};
