const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./routes/user.routes');

// requiring ENV //

require('dotenv').config();

// setup middleware //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// app routes

app.use('/user', user);

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
