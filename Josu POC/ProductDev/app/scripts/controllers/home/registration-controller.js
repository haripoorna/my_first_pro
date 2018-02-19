'use strict';

/**
 * @ngdoc function
 * @name productDevApp.controller:registrationController
 * @description
 * # MainCtrl
 * Controller of the productDevApp
 */
angular.module('productDevApp')
    .controller('registrationController', ['$scope', 'formEmployer','$timeout','$mdSidenav','$log', function(scope, formEmployer, timeout, mdSidenav, log) {
        scope.loadFormData = function() {
            scope.formBuildInfo = formEmployer.properties;
            // Resets form data
            angular.forEach(scope.formBuildInfo, function(formObject, formKey) {
                angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                    formInfoObject.formModel = null;
                });
            });
            scope.getFormHeader(scope.formBuildInfo);
            scope.checkNavigators();
        };
        scope.getFormHeader = function(formData) {
            angular.forEach(formData, function(formValue) {
                if (formValue.isSelected) {
                    scope.formHeader = formValue.header;
                }
            });
        };
        scope.navigateRegistration = function(isNavigation, isRight) {
            scope.tempIndex = 0;
            if (isNavigation) {
                if (isRight) {
                    scope.selectedIndex = scope.currentIndex + 1;
                } else {
                    scope.selectedIndex = scope.currentIndex - 1;
                }
                angular.forEach(scope.formBuildInfo, function(formObject, formKey) {
                    formObject.isSelected = false;
                    if (scope.selectedIndex === scope.tempIndex) {
                        formObject.isSelected = true;
                    }
                    scope.tempIndex++;
                });
                scope.getFormHeader(scope.formBuildInfo);
                scope.checkNavigators();
            }
        };
        scope.checkNavigators = function() { 
            scope.currentIndex = 0;
            scope.activeHeaderFound = false;
            scope.formLength = Object.keys(scope.formBuildInfo).length;
            angular.forEach(scope.formBuildInfo, function(formObject, formKey) {
                if (formObject.isSelected && !scope.activeHeaderFound) {
                    scope.activeHeaderFound = true;
                }
                if (!scope.activeHeaderFound) {
                    scope.currentIndex++;
                }
            });
            scope.disableNavigators();
        };
        scope.disableNavigators = function() {
            scope.disableRightNavigation = false;
            scope.disableLeftNavigation = false;
            if (scope.currentIndex === scope.formLength - 1) {
                scope.disableRightNavigation = true;
            } else if (!scope.currentIndex) {
                scope.disableLeftNavigation = true;
            }
        };
        scope.toggleRight = buildToggler('right');
        scope.isOpenRight = function() {
            return mdSidenav('right').isOpen();
        };
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = scope,
                    args = Array.prototype.slice.call(arguments);
                timeout.cancel(timer);
                timer = timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }
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
        scope.loadFormData();
    }]);