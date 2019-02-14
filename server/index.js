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
const url = require('./routes/url.routes');
const link = require('./routes/link.routes');

// requiring ENV //

require('dotenv').config();

// setup for cookie

app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [`${process.env.COOKIE_KEY}`]
	})
);

// setup middleware //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// init passport middleware

app.use(passport.initialize());
app.use(passport.session());

// app routes

app.use('/localauth', localAuth);
app.use('/user', user);
app.use('/auth', auth);
app.use('/url', url);
app.use('/link', link);

// setup for static folder/files

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
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
