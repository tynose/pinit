const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./config/database');
const cors = require('cors');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./config/passport');
const bodyParser = require('body-parser');
const localAuth = require('./routes/local-auth.routes');
const auth = require('./routes/auth.routes');
const user = require('./routes/user.routes');

app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [process.env.COOKIE_KEY]
	})
);

// requiring ENV //

require('dotenv').config();

// serves static index.html from app root project folder in client

app.use(express.static(path.resolve(__dirname, '../public/src/app')));

// setup middleware //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// init passport

app.use(passport.initialize());
app.use(passport.session());

// app routes

app.use('/localauth', localAuth);
app.use('/auth', auth);
app.use('/user', user);

// fallback route that servers static index.html page found in client root folder

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/src/app', 'index.html'));
});

// connection to database on localhost

db.authenticate()
	.then(() => console.log('database is connected...'))
	.catch(err => console.log(`Error: ${err}`));

// app listening on specified PORT

app.listen(PORT, err => {
	if (err) {
		console.log(`Error: ${err}`);
	}
	console.log(`listening on http://localhost:${PORT}`);
});
