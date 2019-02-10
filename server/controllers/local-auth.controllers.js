const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// get all users

exports.users = function(req, res) {
	db.User.findAll()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.status(500).json(err));
};

// user sign up

exports.userSignup = function(req, res) {
	const { name, email } = req.body;
	let password = bcrypt.hashSync(req.body.password, 12);

	db.User.findOrCreate({
		where: { name },
		defaults: { name, email }
	})
		.spread((user, created) => {
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
			});
		})
		.then(() => res.state(200).json({ msg: 'a new user has been created' }))
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
					res.json({ token });
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
