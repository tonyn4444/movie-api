var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
	res.render('search');
})

app.get('/results', function(req, res) {
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?s=" + query;
	request( url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
		var parsedData = JSON.parse(body);
		console.log(parsedData)
		res.render('results', {data: parsedData});
		}
	});
});

app.listen(3000, function() {
	console.log("Listening on port 3000");
})
