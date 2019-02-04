'use strict';
module.exports = (sequelize, DataTypes) => {
	const GithubAuth = sequelize.define(
		'GithubAuth',
		{
			name: DataTypes.STRING,
			github_id: DataTypes.STRING,
			user_id: DataTypes.STRING
		},
		{
			underscored: true
		}
	);
	GithubAuth.associate = function(models) {
		GithubAuth.belongsTo(models.User, { foreignKey: 'user_id' });
	};
	return GithubAuth;
};
