require('dotenv').config();

// auth logout

exports.logOut = function(req, res) {
	req.logout();
};

// callback routes for github

exports.callBack = function(req, res) {
	res.redirect('/user');
	// res.redirect(`/user/${req.user.name.toLowerCase().replace(/\s/g, '')}`);
};
