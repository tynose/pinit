const db = require('../models');
const shortid = require('shortid');
require('dotenv').config();

// url encoder(shorten)

exports.encoder = function(req, res) {
	const { href } = req.body;
	if (href) {
		db.Url.findOne({
			where: { href }
		})
			.then(url => {
				if (!url) {
					db.Url.create({ href, url_code: shortid.generate() }).then(url =>
						res.status(201).json(`${process.env.HOST}/url/${url.url_code}`)
					);
				} else {
					res.status(201).json(`${host}/url/${url.url_code}`);
				}
			})
			.catch(err => res.status(500).json(err));
	}
};

// url decoder

exports.decoder = function(req, res) {
	const url_code = req.params.id;
	db.Url.findOne({
		where: {
			url_code
		}
	})
		.then(url => {
			if (url) {
				res.redirect(url.href);
			} else {
				res.redirect('/');
			}
		})
		.catch(err => res.status(500).json(err));
};
