require('dotenv').config();

// auth logout

exports.logOut = function(req, res) {
	req.logout();
	res.redirect('/');
};

// callback routes for github

exports.callBack = function(req, res) {
	res.redirect('/');
};
