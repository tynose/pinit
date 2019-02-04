const passport = require('passport');
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

// auth with github

exports.github = passport.authenticate('github', {
	scope: ['profile']
});

// callback routes for github

exports.callBack = function(req, res) {
	res.redirect('/user/');
	// res.redirect(`/user/${req.user.name.toLowerCase().replace(/\s/g, '')}`);
};
