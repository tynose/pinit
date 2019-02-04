const db = require('../models');
require('dotenv').config();

// get all users

// exports.users = function(req, res) {
// 	db.User.findAll({})
// 		.then(users => {
// 			res.status(200).json(users);
// 		})
// 		.catch(err => res.status(500).json(err));
// };

// auth check

exports.authorize = function(req, res, next) {
	if (!req.user) {
		res.redirect('/home');
	} else {
		next();
	}
};

// user sign up

exports.loggedInUser = function(req, res) {
	res.json(req.user);
};
