(function () {

	var userController = require('../users/userController.js');
	//get what userController.js exports
	module.exports = function (app, express) {
		app.post('/signup')
	}
	//and when HTTP POST req is done at '/signup' then give call back to app.post .

})();
