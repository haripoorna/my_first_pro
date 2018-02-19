'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:beforeLoginHeaderController
 * @description
 * # BeforeLoginHeaderController
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('beforeLoginHeaderController', ['homePageConfig','$scope', 'constants',
	function(homePageConfig, scope, constants) {
	// header information start here
	// information of the tabs in the home page
	scope.tabs = homePageConfig.headerProperties.tabs;
	// sign in label information
	scope.headerSignIn = constants.signIn;
	// header information ends here
}]);