'use strict';
module.exports = (sequelize, DataTypes) => {
	const Link = sequelize.define(
		'Link',
		{
			user_id: DataTypes.STRING,
			photo_id: DataTypes.STRING
		},
		{
			underscored: true
		}
	);
	Link.associate = function(models) {
		Link.belongsTo(models.User, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE'
		});
	};
	return Link;
};
