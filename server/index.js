const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
	if (err) {
		console.log(`Error: ${err}`);
	}
	console.log(`listening on http://localhost:${PORT}`);
});
