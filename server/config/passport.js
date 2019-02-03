const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const db = require('../models');
require('dotenv').config();

passport.use(
	new GitHubStrategy(
		{
			// setup options for strategy
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: '/auth/github/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			// callback for passport
			db.User.findOrCreate({ githubId: profile.id }, (err, user) =>
				done(err, user)
			);
		}
	)
);
