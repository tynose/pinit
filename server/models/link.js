'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    user_id: DataTypes.STRING,
    photo_id: DataTypes.STRING
  }, {
    underscored: true,
  });
  Link.associate = function(models) {
    // associations can be defined here
  };
  return Link;
};