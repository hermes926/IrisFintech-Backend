// Requiring modules
const express = require('express');
const cors = require('cors');
const app = express();
const mssql = require("mssql");

// Get request
app.use(cors());
app.post('/new', async function (req, res) {

    console.log(req);
	// Config your database credential
	const config = {
		server: 'localhost',
		database: "iris_test",
		user: "aries",
		password: "kiqyMBDpzo8&",
        options: {
            trustServerCertificate: true
        }
	};

	// Connect to your database
	await mssql.connect(config, async function (err) {

		// Create Request object to perform
		// query operation
		console.log(err);
        var request = new mssql.Request();
        
		// Query to the database and get the records
		await request.query('select * from Messages',
			function (err, records) {

				if (err) console.log(err)

				// Send records as a response
				// to browser
				// res(200).send();

		});
	});
	res.sendStatus(200);
});

var server = app.listen(5000, function () {
	console.log('Server is listening at port 5000...');
});
