'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:RegistrationController
 * @description
 * # registrationController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('registrationController', ['$scope', '$rootScope', '$state', 'formLogin', 'requestService', 'requestAndResponse',
    'constants', 'registrationInfo', 'formEmployer', 'formStudent', 'formCollege', 'filterOptions',
    function(scope, rootScope, state, formLogin, requestService, requestAndResponse, constants, registrationInfo, formEmployer, formStudent, formCollege, filterOptions) {
        // creating the request response object for sign-up
        scope.requestObject = {
            'user': null,
            'info': {}
        };
        rootScope.colleges = [];
        scope.username = constants.userName;
        scope.emailID = constants.emailID;
        // setting flags  
        rootScope.isRegistrationForm = false;
        rootScope.userNameErrorMessage = false;
        rootScope.emailErrorMessage = false;
        var myStorage = localStorage;
        // login sign up
        scope.loginSignUp = constants.signUp;
        // sign-up header info
        scope.signUpHeaderInfo = registrationInfo.signUpInfo.signUpHeaderInfo;
        //sign-up info
        scope.signUpInfo = registrationInfo.signUpInfo.details;
        // sign-up success info
        scope.registrationSuccessInfo = registrationInfo.signUpInfo.signUpSuccessInfo;
        // branches list 
        scope.branchList = filterOptions.student.branches;
        scope.isYearOfPassoutSelected = function() {
            scope.date = new Date();
            var presentYear = scope.date.getFullYear();
            scope.yearList = [];
            for (var initialDate = 2010; initialDate <= presentYear; initialDate++) {
                scope.yearList.push(initialDate);
            }
        }
        scope.isYearOfPassoutSelected();
        scope.openRegistrationForm = function(selectedRole, selectedRoleObject) {
            rootScope.isLeftNavigation = true;
            rootScope.isRegistrationForm = true;
            scope.selectedRole = selectedRole;
            scope.selectedRoleObject = selectedRoleObject;
            if (scope.selectedRole.toLowerCase() === constants.college) {
                scope.registrationFormBuildInfo = formCollege.properties;
            }
            if (scope.selectedRole.toLowerCase() === constants.employer) {
                scope.registrationFormBuildInfo = formEmployer.properties;
            }
            if (scope.selectedRole.toLowerCase() === constants.student) {
                scope.registrationFormBuildInfo = formStudent.properties;
            }
            // Resets form data
            angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
                angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                    formInfoObject.formModel = null;
                });
            });
            requestService.invokeService(requestAndResponse.collegeLists, 'GET', null, null).then(function(response) {
                angular.forEach(response.data, function(eachCollege) {
                    rootScope.colleges.push(eachCollege);
                });
            });
            scope.getFormHeader(scope.registrationFormBuildInfo);
            scope.checkNavigators();
        };
        scope.getFormHeader = function(formData) {
            angular.forEach(formData, function(formValue) {
                if (formValue.isSelected) {
                    scope.formHeader = formValue.header;
                }
            });
        };
        scope.getNextOrPrevious = function() {
            scope.tempIndex = 0;
            angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
                formObject.isSelected = false;
                if (scope.selectedIndex === scope.tempIndex) {
                    formObject.isSelected = true;
                }
                scope.tempIndex++;
            });
            scope.getFormHeader(scope.registrationFormBuildInfo);
            scope.checkNavigators();
        };
        scope.navigateRegistration = function(isNavigation, isRight, isValid) {
            if (isNavigation) {
                if (isRight && isValid) {
                    scope.selectedIndex = scope.currentIndex + 1;
                    scope.getNextOrPrevious();
                } else if (!isRight) {
                    scope.selectedIndex = scope.currentIndex - 1;
                    scope.getNextOrPrevious();
                }
            }
        };
        scope.checkNavigators = function() {
            scope.currentIndex = 0;
            scope.activeHeaderFound = false;
            scope.formLength = Object.keys(scope.registrationFormBuildInfo).length;
            angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
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
                    if (response.data.type === "userName") {
                        rootScope.userNameErrorMessage = true;
                        scope.userCheckMessage = response.data.message;
                    } else if (response.data === "success") {
                        rootScope.userNameErrorMessage = false;
                    }
                    if (response.data.type === "email") {
                        rootScope.emailErrorMessage = true;
                        scope.emailCheckMessage = response.data.message;
                    } else if (response.data === "success") {
                        rootScope.emailErrorMessage = false;
                    }
                });
            }
        };
        scope.register = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.user = scope.selectedRole.toLowerCase();
                angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
                    angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                        scope.requestObject.info[formInfoKey] = formInfoObject.formModel;
                    });
                });
                requestService.invokeService(requestAndResponse.registrationRequest, 'POST', null, scope.requestObject).then(function(response) {
                    if (response.data.type === "success") {
                        scope.isRegistrationSuccess = response.data.message;
                        rootScope.isRegistrationForm = false;
                    }
                });
            }
        };
        scope.fnCheckForNameExistence = function(title) {
            if (title.toLowerCase() == scope.username) {
                rootScope.userNameErrorMessage = false;
            } else if (title.toLowerCase() == scope.emailID) {
                rootScope.emailErrorMessage = false;
            }
        }
    }
]);
