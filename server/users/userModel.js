(function () {

	var mongoose = require('mongoose');
	var UserSchema = new mongoose.Schema({
		username: {
			type: String,
			unique: true
		},
		email: String,
		game1: String,
		game2: String,
		game3: String,
		game4: String,
		game5: String
	});

	module.exports = mongoose.model('users', UserSchema);

})();

//we are making a schema that is gonna fit in our DB. let UserSchema is a new mongoose Schema and in that schema, we define a username , it is a string and it should be unique to other usernames. And now we can store their email too. Then we can also save upto 5 games and can override one if all slots are filled.

// We are exporting the mongoose model named users which has the architecture of the mongoose schema named UserSchema
// users is the name of the collection.
