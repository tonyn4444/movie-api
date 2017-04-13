var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
	res.send('Homepage');
})

app.get('/results', function(req, res) {
	request('http://www.omdbapi.com/?t=batman', function(error, response, body) {
		var parsedData = JSON.parse(body);
		res.send(parsedData);
	});
});

app.listen(3000, function() {
	console.log("Listening on port 3000");
})
