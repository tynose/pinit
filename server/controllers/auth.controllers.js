const passport = require('passport');
require('dotenv').config();

// auth logout

exports.logOut = function(req, res) {
	req.logout();
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
