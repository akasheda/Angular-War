(function () {

	var express = require('express'); //give the express to me here from node modules
	var app = express(); // get express running here
	var mongoose = require('mongoose'); //get mongoose
	var config = require('./config/config.js');

	mongoose.connect(config.db); // start and connect a db in config file

	require('./config/middleware.js')(app, express); // get middleware.js file and give parameters app and express.

	module.exports = app; // export express()

})();
