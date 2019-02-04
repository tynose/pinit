'use strict';
module.exports = (sequelize, DataTypes) => {
	const LocalAuth = sequelize.define(
		'LocalAuth',
		{
			password: DataTypes.STRING,
			email: DataTypes.STRING,
			name: DataTypes.STRING,
			user_id: DataTypes.STRING
		},
		{
			underscored: true
		}
	);
	LocalAuth.associate = function(models) {
		LocalAuth.belongsTo(models.User, { foreignKey: 'user_id' });
	};
	return LocalAuth;
};
