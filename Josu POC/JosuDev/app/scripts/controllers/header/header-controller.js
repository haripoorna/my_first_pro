'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:HeaderController
 * @description
 * # headerController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('headerController', ['$scope', '$state', 'headerInfo', '$mdSidenav', '$log', '$window',
    function(scope, state, headerInfo, mdSidenav, log, window) {
        var myStorage = localStorage;
        //home-page content info
        var isLoggedIn = myStorage.getItem('authToken');
        scope.isDropdown = false;
        if (isLoggedIn && state.current.name !== "home") {
            scope.headerContent = headerInfo.afterLogin;
        } else {
            scope.headerContent = headerInfo.beforeLogin;
        }
        scope.login = buildToggler('right');
        scope.openHeaderDropdown = function() {
            scope.isDropdown = scope.isDropdown ? false : true;
        }
        scope.isOpenRight = function() {
            return mdSidenav('right').isOpen();
        };
        function buildToggler(navID) {
            return function() {
                if(isLoggedIn) {
                    state.go('dashboard');
                } else {
                    scope.isDropdown = false;
                    mdSidenav(navID).toggle();
                }
            };
        };
        scope.close = function() {
            mdSidenav('right').close();
        };
        scope.logout = function() {
            window.localStorage.clear();
            state.go('home');
        };
        if (state.current.name === "setPassword") {
            scope.disableSignIn = true;
        }
        scope.openTab = function(targetState) {
            scope.isDropdown = false;
        }
    }
]);
