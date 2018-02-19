'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:HomeController
 * @description
 * # homeController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('sliderController', ['$scope', '$rootScope', '$state', '$mdSidenav', function(scope, rootScope, state, mdSidenav) {
    // Flags
    // Flag to know which a toggle is selected 
    rootScope.isLeftNavigation = false;
    scope.openLogin = function() {
        scope.isRegistration = false;   
    };
    scope.openRegistration = function() {
        scope.isRegistration = true;
        rootScope.isRegistrationForm = false;
    };
    scope.close = function() {
        mdSidenav('right').close();
    };
}]);
