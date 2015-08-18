var rune = require('../index.js');
var express = require('express');
var app = express();
var http = require('http').Server(app);

// /Generate?user=USERNAME
app.get('/generate', function(req, res) {
	rune.Generate(req.query.user, function(code) {
		res.write(code);
		res.end();
	});
});

// /Check?user=USERNAME
app.get('/check', function(req, res) {
	rune.Check(req.query.user, function(verified) {
		if(verified) { res.write('GOOD'); res.end(); }
		else {res.write('BAD'); res.end();}
	});
});

http.listen(80, function(){
  console.log('Server is now running...');
});
