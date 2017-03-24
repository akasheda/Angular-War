(function () {
	// config is an object, we are exporting that.
	var config = {
		db: process.env.MONGODB_URI || 'mongodb://localhost/war', // MONGODB_URI is a envirment variable so it equals something other. so it equals that to some thing or in development if it is false it goes to the second URl mentioned and similar with the port below
		port: process.env.PORT || 8080
	};

	module.exports = config;

})();
