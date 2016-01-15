var express = require('express');
var routes = require('./app/routes/routes.js');
var mongoose = require("mongoose");
var app = express();

routes(app);

//mongoose.connect(process.env.MONGODB);
mongoose.connect('mongodb://andrewghc:password@ds035995.mongolab.com:35995/url-shortener');

var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.on('open', function() {
        console.log('Connected to database');
    });

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
