var express = require('express');
var data= require('./data.json');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Solutions API active</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json(data);
});

app.listen(port);