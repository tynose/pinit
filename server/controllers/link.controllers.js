const db = require('../models');

// get links associated to user id

exports.getLinks = function(req, res) {
	const { id } = req.params;
	db.Link.findAll({
		where: {
			id
		}
	});
};

// add link associated to user id

exports.add = function(req, res) {
	db.Link.create({
		...req.body
	})
		.then(res => console.log(res))
		.catch(err => res.json(err));
};
