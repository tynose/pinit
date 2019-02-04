const db = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();

// get all users

exports.users = function(req, res) {
	db.User.findAll({})
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.status(500).json(err));
};

// user sign up

exports.userSignup = function(req, res) {
	let password = bcrypt.hashSync(req.body.password, 12);

	db.User.create({
		...req.body,
		password
	})
		.then(() => res.status(201).json({ msg: 'a new user has been created' }))
		.catch(err => res.status(500).json(err));
};
