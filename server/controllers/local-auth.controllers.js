const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
	const { name, email } = req.body;
	let password = bcrypt.hashSync(req.body.password, 12);
	db.User.create({
		name,
		email
	})
		.then(user => {
			db.LocalAuth.create({
				name,
				email,
				password,
				user_id: user.id
			});
			res.status(201).json({ msg: 'a new user has been created' });
		})
		.catch(err => res.status(500).json(err));
};

// user sign up

exports.userLogin = function(req, res) {
	const { email, password } = req.body;

	db.LocalAuth.findOne({
		where: {
			email
		}
	})
		.then(user => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					const token = jwt.sign({ subject: email }, process.env.SECRET_KEY);
					res.json({ token: token });
				}
				if (err) {
					res.status(401).json({ msg: 'invalid credentials' });
				}
			});
		})
		.catch(err => {
			res.status(500).json(err);
		});
};

// user authorization  //

exports.authorize = function(req, res, next) {
	const { authorization } = req.headers;

	const token = authorization.split('Bearer ')[1];

	if (!token) {
		return res.status(401).json({ msg: 'no token provided' });
	}

	const decoded = jwt.verify(token, process.env.SECRET_KEY);
	console.log(decoded);

	if (!decoded) {
		return res.status(401).json({ msg: 'invalid token' });
	}

	req.email = decoded;
	next();
};

// get logged in user //

exports.loggedInUser = function(req, res) {
	const email = req.email.subject;

	db.LocalAuth.findOne({
		where: {
			email
		}
	})
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => res.status(500).json(err));
};
