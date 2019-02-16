const db = require('../models');

// get links associated to user id

exports.getLinks = function(req, res) {
	const { id } = req.params;
	const { limit } = req.query;

	db.Link.findAll({
		where: {
			user_id: id
		},
		offset: limit,
		limit: 10
	})
		.then(photos => {
			res.json(photos);
		})
		.catch(err => res.json(err));
};

// add link associated to user id

exports.add = function(req, res) {
	db.Link.create({
		...req.body
	})
		.then(res => res.status(200).json(res))
		.catch(err => res.json(err));
};

// delete link

exports.deleteLink = function(req, res) {
	const { id } = req.params;
	db.Link.findOne({
		where: {
			id
		}
	})
		.then(link => {
			link.destroy();
			res.status(200).json(link);
		})
		.catch(err => res.status(500).json(err));
};
