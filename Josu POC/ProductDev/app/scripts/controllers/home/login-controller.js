'use strict';

/**
 * @ngdoc function
 * @name productDevApp.controller:registrationController
 * @description
 * # MainCtrl
 * Controller of the productDevApp
 */
angular.module('productDevApp')
    .controller('loginController', ['$scope','$mdSidenav','$log', function(scope, mdSidenav, log) {
       scope.toggleRight = buildToggler('right');
        scope.isOpenRight = function() {
            return mdSidenav('right').isOpen();
        };
        function buildToggler(navID) {
            return function() {
                mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        log.debug("toggle " + navID + " is done");
                    });
            };
        }
        scope.close = function() {
            mdSidenav('right').close()
                .then(function() {
                    log.debug("close RIGHT is done");
                });
        };
    }]);