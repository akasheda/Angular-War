(function () {
	angular.module('war')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.
			otherwise('/landingpage');

			$stateProvider.
			state('landingpage', {
				url: '/landingpage',
				templateUrl: '../templates/landingpage.html',
				/* what template are you gonna use*/
				controller: 'LandingController as landing'
			})

		}])

})();
