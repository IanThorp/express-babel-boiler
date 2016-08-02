'use strict';

var express = require('express');
var app = express();

var port = 3000;

app.listen(port, function () {
	console.log('listening on port ' + port + '...');
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});