const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const db = require('../models');
require('dotenv').config();

passport.serializeUser((user, done) => {
	done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
	db.User.findOne({
		where: { id }
	}).then(user => {
		done(null, user);
	});
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
			const { id, displayName, _json } = profile;
			const githubUser = await db.GithubAuth.findOne({
				where: { github_id: id }
			});

			if (!githubUser) {
				const newUser = await db.User.create({
					name: displayName,
					email: _json.email
				});
				await db.GithubAuth.create({
					github_id: id,
					name: displayName,
					user_id: newUser.id
				});
				done(null, newUser);
			} else {
				done(null, githubUser);
			}
		}
	)
);
