'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:loginCtrl
 * @description
 * # LoginCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('loginController', ['$scope', '$state', 'requestService', 'requestAndResponse', 'constants', 'homePageConfig', function(scope, state, requestService, requestAndResponse, constants, homePageConfig) {
    // Flag to know whether a role is selected or not
    scope.isRoleSelected = false;
    scope.isDataLoaded = false;
    var myStorage = localStorage;
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
    // For response Object
    // creating the request/repsonse for login
    // resets the login text
    angular.forEach(scope.loginFormBuildInfo, function(eachForm) { debugger;
        eachForm.formModel = null;
    });
    scope.signInRequestObject = {
        'user': null,
        'userName': null,
        'password': null
    };
    // toggling the login text based on the role
    scope.displayLogin = function(selectedRoleObject, selectedRole) {
        setTimeout(function() {
            scope.isDataLoaded = true;
            scope.$apply();
        }, 500);
        scope.isRoleSelected = true;
        scope.loginText = selectedRoleObject.loginText;
        scope.selectedRole = selectedRole;
        scope.selectedRoleObject = selectedRoleObject;
        scope.selectedRoleObject.selectedRole = selectedRole;
        myStorage.setItem('setSelectedRoleObject', angular.toJson(scope.selectedRoleObject));
    };
    scope.signIn = function(isDisabled) {
        if (!isDisabled) {
            scope.signInRequestObject.user = scope.selectedRole.toLowerCase();
            scope.signInRequestObject.password = scope.loginFormBuildInfo.password.formModel;
            scope.signInRequestObject.userName = scope.loginFormBuildInfo.userName.formModel;
            requestService.invokeService(requestAndResponse.signInRequest, 'POST', null, scope.signInRequestObject).then(function(response) {
                myStorage.setItem('userLogged', response.data.state);
                if (response.data === "Invalid User" || response.data === "Wrong Password!" || response.data === "Incorrect type login") {
                    scope.wrongCredentials = response.data;
                } else {
                    myStorage.setItem('authToken', response.data.AuthToken);
                    myStorage.setItem('userName', response.data.UserName);
                    state.go('dashboard');
                }
            });
        }
    }
    scope.goToHome = function() {
        state.go('home');
    }
    scope.goToRegistration = function() {
        state.go('registration');
    }
}]);
