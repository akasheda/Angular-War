(function () {
	angular.module('war')
		.factory('landingservice', ['$http', function ($http) {
			var service = {

			};
			return service;
			//good practice to declare and return the service at the top and then use all the functions below. Anyway acc to JS hoisting all the functions are declared and assigned earlier.
			function signup() {
				$http()
			}


	}]);

})();
