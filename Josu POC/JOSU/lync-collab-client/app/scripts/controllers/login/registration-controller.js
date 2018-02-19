'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:registrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('registrationController', ['$scope', '$state', 'commonService', 'requestService', 'requestAndResponse', 'constants', 'formEmployer', 'formStudent', 'formCollege',
    function(scope, state, commonService, requestService, requestAndResponse, constants, formEmployer, formStudent, formCollege) {
        var myStorage = localStorage;
        scope.form = {};
        scope.userNameErrorMessage = false;
        scope.emailErrorMessage = false;
        // login sign in
        scope.loginSignIn = constants.signIn;
        scope.username = constants.userName;
        scope.emailID = constants.emailID;
        // creating the request response object
        scope.requestObject = {
            'user': null,
            'info': {}
        };
        scope.selectedRoleObject = angular.fromJson(myStorage.getItem('setSelectedRoleObject'));
        scope.selectedRole = scope.selectedRoleObject.selectedRole;
        scope.loadFormData = function() {
            scope.loginText = scope.selectedRoleObject.registrationText;
            scope.isRegistration = true;
            if (scope.selectedRole.toLowerCase() === constants.college) {
                scope.formBuildInfo = formCollege.properties;
            }
            if (scope.selectedRole.toLowerCase() === constants.employer) {
                scope.formBuildInfo = formEmployer.properties;
            }
            if (scope.selectedRole.toLowerCase() === constants.student) {
                scope.formBuildInfo = formStudent.properties;
            }
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
            /*angular.forEach(scope.formBuildInfo, function(formObject, formKey) {
                var index = 0;
                if (formObject.isSelected === true) {
                    angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                        console.log(scope.form.formValidator['name' + index]);
                        if (scope.form.formValidator['name' + index].$valid) {
                            scope.validated = true;
                        } else {
                            scope.validated = false;
                        }
                        index++;
                    });
                }
            });
            if (scope.validated) {*/
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
            /*            } else {
                            //scope.showError = true;
                            //write logic to display error 
                        }*/
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
        scope.checkAvailability = function(fieldObject) {
            scope.checkAvailabilityObject = {
                "check": null
            };
            scope.isUserOrEmail = false;
            if (fieldObject.title.trim().toLowerCase() === scope.username) {
                scope.isUserOrEmail = true;
                scope.checkAvailabilityObject.check = fieldObject.formModel;
                scope.checkAvailabilityURL = requestAndResponse.userNameCheckRequest;
            } else if (fieldObject.title.trim().toLowerCase() === scope.emailID) {
                scope.isUserOrEmail = true;
                scope.checkAvailabilityObject.check = fieldObject.formModel;
                scope.checkAvailabilityURL = requestAndResponse.emailCheckRequest;
            }
            if (scope.isUserOrEmail) {
                requestService.invokeService(scope.checkAvailabilityURL, 'POST', null, scope.checkAvailabilityObject).then(function(response) {
                    if (response.data === "Username Already Taken") {
                        scope.userNameErrorMessage = true;
                        scope.userCheckMessage = response.data;
                    } else if (response.data === "Username Available") {
                        scope.userNameErrorMessage = false;
                    }
                    if (response.data === "Email Id Already Exits") {
                        scope.emailErrorMessage = true;
                        scope.emailCheckMessage = response.data;
                    } else if (response.data === "Good to go!") {
                        scope.emailErrorMessage = false;
                    }
                });
            }
        };
        scope.register = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.user = scope.selectedRole.toLowerCase();
                angular.forEach(scope.formBuildInfo, function(formObject, formKey) {
                    angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                        scope.requestObject.info[formInfoKey] = formInfoObject.formModel;
                    });
                });
                requestService.invokeService(requestAndResponse.registrationRequest, 'POST', null, scope.requestObject).then(function(response) {
                    if (response.data) {
                        state.go('registrationSuccess');
                    }
                });
            }
        };
        scope.goToHome = function() {
            state.go('home');
        }
        scope.loadFormData();
        scope.fnCheckForNameExistence = function(title) {
            if (title == "USER NAME") {
                scope.userNameErrorMessage = false;
            } else if (title == "EMAIL ID") {
                scope.emailErrorMessage = false;
            }
        }
    }
]);
