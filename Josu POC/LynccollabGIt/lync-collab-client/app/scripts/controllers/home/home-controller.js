'use strict';
/**
 * @ngdoc functionv,
 * @name lyncSchoolApp.controller:homeCtrl
 * @description
 * # HomeCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('homeController', ['$scope', '$state', 'homePageConfig', 'constants', 'formCollege', 'formStudent', 'formEmployer', 'requestService', 'requestAndResponse',
    function(scope, state, homePageConfig, constants, formCollege, formStudent, formEmployer, requestService, requestAndResponse) {
        // creating the request response object
        scope.requestObject = {
            'user': null,
            'info': {}
        };
        scope.signInRequestObject = {
            'user': null,
            'UserName': null,
            'Password': null
        };
        scope.userNameRequestObject = {
            'user': null,
            'UserName': null
        };
        scope.emailRequestObject = {
            'user': null,
            'PrimaryEmail': null
        };
            // Flags
            // Flag to know whether a role is selected or not
        scope.isRoleSelected = false;
        scope.isRegistration = false;
        // header information start here
        // information of the tabs in the home page
        scope.tabs = homePageConfig.headerProperties.tabs;
        // header control information ends here
        // login information starts here
        // login text information
        scope.loginText = constants.loginText;
        // login role information
        scope.loginSelectors = homePageConfig.loginProperties.details;
        // login form builder
        scope.loginFormBuildInfo = homePageConfig.loginProperties.loginFormInfo;
        // login sign in
        scope.loginSignIn = constants.signIn;
        // login forgot Password
        scope.forgotPassword = homePageConfig.loginProperties.forgotPassword;
        // login sign up
        scope.loginSignUp = constants.signUp;
        // login information ends here
        // toggling the login text based on the role

        scope.displayLogin = function(selectedRoleObject, selectedRole) {
            scope.isRoleSelected = true;
            scope.loginText = selectedRoleObject.loginText;
            scope.selectedRole = selectedRole;
            scope.selectedRoleObject = selectedRoleObject;
        };
        // resets the login text
        scope.resetLoginText = function() {
            scope.loginText = constants.loginText;
            scope.isRoleSelected = false;
            scope.isRegistration = false;
            angular.forEach(scope.loginFormBuildInfo, function(eachForm) {
                eachForm.formModel = null;
            });
            angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
                angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                    formInfoObject.formModel = null;
                });
            });
        };
        // selection state
        scope.goToSelection = function(selectedTab) {
            // reset Active element
            angular.forEach(scope.tabs, function(eachActiveFlag) {
                eachActiveFlag.isActive = false;
            });
            // set Active Tab
            scope.tabs[selectedTab].isActive = true;
        };
        scope.openRegistration = function() {
            scope.loginText = scope.selectedRoleObject.registrationText;
            scope.isRegistration = true;
            if (scope.selectedRole.toLowerCase() === constants.college) {
                scope.registrationFormBuildInfo = formCollege.properties;
            }
            if (scope.selectedRole.toLowerCase() === constants.employer) {
                scope.registrationFormBuildInfo = formEmployer.properties;
            }
            if (scope.selectedRole.toLowerCase() === constants.student) {
                scope.registrationFormBuildInfo = formStudent.properties;
            }
            scope.getFormHeader(scope.registrationFormBuildInfo);
            scope.checkNavigators();
        };
        // requestService.invokeService('url','POST', formCollege.properties);
        // requestService.invokeService('url').then(function(data){

        // }); 
        scope.checkAvailability = function(isBlur) {
            if (isBlur) {                
                angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
                    if (formObject.formInfo.UserName) {
                        scope.userNameRequestObject.user = scope.selectedRole.toLowerCase();
                        scope.userNameRequestObject.UserName = formObject.formInfo.UserName.formModel;
                        console.log(scope.userNameRequestObject.UserName);
                    }
                    if (formObject.formInfo.PrimaryEmail) {
                        scope.emailRequestObject.user = scope.selectedRole.toLowerCase();
                        scope.emailRequestObject.PrimaryEmail = formObject.formInfo.PrimaryEmail.formModel;
                        console.log(scope.emailRequestObject.PrimaryEmail);
                    }
                });
                requestService.invokeService(requestAndResponse.userNameCheckRequest, 'POST', null, scope.userNameRequestObject).then(function(response) {
                    if (response.data) {
                        console.log(response.data);
                        scope.userNameExists=response.data;
                    }
                });
                requestService.invokeService(requestAndResponse.emailCheckRequest, 'POST', null, scope.emailRequestObject).then(function(response) {
                    if (response.data) {
                        console.log(response.data);
                    }
                });
            }
        }

        scope.signIn = function(isDisabled) {
            if (!isDisabled) {
                angular.element('#loginModal').modal('hide');
                scope.signInRequestObject.user = scope.selectedRole.toLowerCase();
                scope.signInRequestObject.Password = scope.loginFormBuildInfo.password.formModel;
                scope.signInRequestObject.UserName = scope.loginFormBuildInfo.userName.formModel;
                requestService.invokeService(requestAndResponse.signInRequest, 'POST', null, scope.signInRequestObject).then(function(response) {
                    if (response.data.UID === 'UT1' || 'UT2' || 'UT3') {
                        state.go(response.data.state);
                    }
                });
            }
        }
        scope.register = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.user = scope.selectedRole.toLowerCase();
                angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
                    angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                        scope.requestObject.info[formInfoKey] = formInfoObject.formModel;
                    });
                });
                requestService.invokeService(requestAndResponse.registrationRequest, 'POST', null, scope.requestObject).then(function(response) {
                    console.log(response);
                    console.log(response.data);
                    angular.element('#loginModal').modal('hide');
                    if (response.status == 200) {
                        state.go('registrationSuccess');
                    }
                });
            }
        }
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
                angular.forEach(scope.registrationFormBuildInfo, function(formObject, formKey) {
                    formObject.isSelected = false;
                    if (scope.selectedIndex === scope.tempIndex) {
                        formObject.isSelected = true;
                    }
                    scope.tempIndex++;
                });
                scope.getFormHeader(scope.registrationFormBuildInfo);
                scope.checkNavigators();
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
    }
]);
