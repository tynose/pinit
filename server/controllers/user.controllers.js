const jwt = require('jsonwebtoken');
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
	if (req.headers.authorization) {
		const { authorization } = req.headers;

		const token = authorization.split('Bearer ')[1];
		if (!token) {
			return res.status(401).json({ msg: 'no token provided' });
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		if (!decoded) {
			return res.status(401).redirect('/home');
		}
		req.email = decoded;
		next();
	} else if (!req.user) {
		res.redirect('/home');
	} else {
		next();
	}
};

// user sign up

exports.loggedInUser = function(req, res) {
	const { email, user } = req;

	let body;
	if (user) {
		body = user.email;
	} else if (email) {
		body = email.subject;
	}

	db.User.findOne({
		where: {
			email: body
		}
	})
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => res.status(500).json(err));
};
