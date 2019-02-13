'use strict';
module.exports = (sequelize, DataTypes) => {
	const Url = sequelize.define(
		'Url',
		{
			href: DataTypes.STRING,
			url_code: DataTypes.STRING
		},
		{
			underscored: true
		}
	);
	Url.associate = function(models) {
		// associations can be defined here
	};
	return Url;
};
