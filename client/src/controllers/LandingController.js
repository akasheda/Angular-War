(function () {
	angular.module('war') //when we use controller As we can use this keyword in the controller, rather than $scope
		.controller('LandingController', ['$state', function ($state) { // vm : view model
			var vm = this;
			vm.email;
			vm.password;
			vm.userName;
			vm.submit = function () {
				console.log(vm.email);
			}
		}])

})();
