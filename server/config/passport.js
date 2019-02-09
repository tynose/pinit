const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const db = require('../models');
require('dotenv').config();

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

passport.use(
	new GitHubStrategy(
		{
			// setup options for strategy
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: '/auth/github/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			// callback for passport
			const { displayName, _json } = profile;
			console.log(profile);

			const user = await db.User.findOne({
				where: {
					name: displayName,
					email: _json.email
				}
			});

			if (!user) {
				const newUser = await db.User.create({
					name: displayName,
					email: _json.email
				});
				done(null, newUser);
			} else {
				done(null, user);
			}
		}
	)
);
