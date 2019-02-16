const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// user sign up

exports.userSignup = function(req, res) {
	const { name, email } = req.body;
	let password = bcrypt.hashSync(req.body.password, 12);
	email.toLowerCase();

	db.User.findOrCreate({
		where: { name },
		defaults: { name, email }
	}).spread((user, created) => {
		if (!created) {
			db.User.update(
				{
					email
				},
				{ where: { name } }
			);
		}
		db.LocalAuth.create({
			name,
			email,
			password,
			user_id: user.dataValues.id
		})
			.then(() => res.state(201).json({ msg: 'a new user has been created' }))
			.catch(err => res.json(err));
	});
};

// user login up

exports.userLogin = function(req, res) {
	const { email, password } = req.body;
	email.toLowerCase();

	db.LocalAuth.findOne({
		where: {
			email
		}
	})
		.then(user => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					const token = jwt.sign({ subject: email }, process.env.SECRET_KEY);
					res.json({ token, user: user.id });
				}
				if (err) {
					res.status(401).json({ msg: 'invalid credentials' });
				}
			});
		})
		.catch(err => {
			res.json(err);
		});
};
