const db = require('../models');
require('dotenv').config();

// auth login

exports.login = function(req, res) {
	res.send('logging in');
};

// auth logout

exports.logOut = function(req, res) {
	//handle with passport
	res.send('logging out');
};

// auto with github

exports.github = function(req, res) {
	//handle with passport
	res.send('logging in with github');
};
