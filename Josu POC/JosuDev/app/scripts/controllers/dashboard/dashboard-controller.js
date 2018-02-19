'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:dashboardController
 * @description
 * # DashboardController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('dashboardController', ['$scope', '$rootScope', '$state', '$mdSidenav', 'dashboardToggle', 'constants', 'formEmployer', 'formStudent', 'formCollege', 'requestService', 'requestAndResponse',
    function(scope, rootScope, state, mdSidenav, dashboardToggle, constants, formEmployer, formStudent, formCollege, requestService, requestAndResponse) {
        var myStorage = localStorage;
        scope.userLogged = myStorage.getItem('userLogged');
        scope.authToken = myStorage.getItem('authToken');
        scope.userName = myStorage.getItem('userName');
        if (!scope.userLogged) {
            state.go('home');
        }
        scope.dashboardToggleInfo = dashboardToggle.toggleInfo;
        scope.profilePicture = dashboardToggle.toggleInfo.profilePicture;
        scope.loadToggle = function(user) {
            scope.userRole = user;
            if (scope.userRole === constants.college) {
                scope.toggleInfo = scope.dashboardToggleInfo.collegeTabs;
                scope.profilePicture = scope.profilePicture.college;
            }
            if (scope.userRole === constants.employer) {
                scope.toggleInfo = scope.dashboardToggleInfo.employerTabs;
                scope.profilePicture = scope.profilePicture.employer;
            }
            if (scope.userRole === constants.student) {
                scope.toggleInfo = scope.dashboardToggleInfo.studentTabs;
                scope.profilePicture = scope.profilePicture.student;
            }
            if (scope.userRole === constants.admin) {
                scope.toggleInfo = scope.dashboardToggleInfo.adminTabs;
                scope.profilePicture = scope.profilePicture.employer;
            }
        };
        scope.loadToggle(scope.userLogged);
        scope.slideEditProfile = buildToggler('editProfile');

        function buildToggler(navID) {
            return function() {
                if (scope.userLogged !== constants.admin) {
                    scope.isDropdown = false;
                    mdSidenav(navID).toggle();
                }
            };
        };
        scope.closeEditProfile = function() {
            mdSidenav('editProfile').close();
        };
    }
]);
