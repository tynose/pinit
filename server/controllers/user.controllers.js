const jwt = require('jsonwebtoken');
const db = require('../models');
require('dotenv').config();

// get all users

exports.user = function(req, res) {
	const { id } = req.params;

	db.User.findOne({
		where: {
			id
		},
		include: [{ model: db.Link }]
	})
		.then(users => {
			res.json(users);
		})
		.catch(err => res.json(err));
};

// auth check

exports.authorize = function(req, res, next) {
	const { authorization } = req.headers;
	if ((authorization !== 'Bearer null') | 'Bearer undefined') {
		req.logout();
		const token = authorization.split('Bearer ')[1];
		if (!token) {
			return res.status(401).json({ msg: 'no token provided' });
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);

		if (!decoded) {
			return res.status(401).redirect('/');
		}
		req.email = decoded;
		next();
	} else if (!req.user) {
		res.redirect('/');
	} else {
		next();
	}
};

// user login up

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
			res.json(user);
		})
		.catch(err => res.json(err));
};
