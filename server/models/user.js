'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			photos: DataTypes.STRING
		},
		{
			underscored: true
		}
	);
	User.associate = function(models) {
		User.hasMany(models.Link, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE'
		});
	};
	return User;
};
