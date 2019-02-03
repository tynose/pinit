const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./config/database');
const cors = require('cors');
const path = require('path');
require('./config/passport');
const bodyParser = require('body-parser');
const user = require('./routes/user.routes');
const auth = require('./routes/auth.routes');

// requiring ENV //

require('dotenv').config();

// serves static index.html from app root project folder in client

app.use(express.static(path.resolve(__dirname, '../public/src/app')));

// setup middleware //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app routes

app.use('/user', user);
app.use('/auth', auth);

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
