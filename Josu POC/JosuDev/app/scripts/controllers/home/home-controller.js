'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:HomeController
 * @description
 * # homeController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('homeController', ['$scope', '$rootScope', '$state', 'homeContent', 'footerInfo', 'formLogin', 'requestService', 'requestAndResponse',
    'constants',
    function(scope, rootScope, state, homeContent, footerInfo, formLogin, requestService, requestAndResponse, constants) {
        scope.signInRequestObject = {
            'userName': null,
            'password': null
        };
        scope.forgotPasswordRequestObject = {
            'email': null
        };
        //home-page content info
        scope.homePageContent = homeContent;
        scope.footerContent = footerInfo;
        // setting flags  
        rootScope.beforeLogin = true;
        rootScope.isForgotPassword = false;
        rootScope.isToggleButton = false;
        var myStorage = localStorage;
        // login header info
        scope.loginHeaderInfo = formLogin.loginHeaderInfo;
        // login sign in
        scope.loginSignIn = constants.signIn;
        // login forgot Password
        scope.forgotPasswordDetails = formLogin.forgotPassword;
        // forgot password form
        scope.forgotPasswordFormBuildInfo = scope.forgotPasswordDetails.properties.formInfo
            // user images
        scope.userImages = formLogin.userImages;
        // login sign up
        scope.loginSignUp = constants.signUp;

        scope.loadData = function() {
            // login form builder
            scope.loginFormBuildInfo = formLogin.loginFormInfo;
        };
        // resets the login text
        scope.resetLoginText = function() {
            //views toggling reset to default
            rootScope.beforeLogin = true;
            rootScope.isToggleButton = true;
            rootScope.isForgotPassword = false;
            //registration pages reset
            scope.isRegistration = false;
            rootScope.isRegistrationForm = false;
            //error messages reset 
            rootScope.wrongCredentials = false;
            rootScope.userNameErrorMessage = false;
            rootScope.emailErrorMessage = false;
            scope.invalidEmail = false;
            scope.checkEmail = false;
            setTimeout(function() { scope.$apply(); }, 3000);
            //login textField reset
            angular.forEach(scope.loginFormBuildInfo, function(eachForm) {
                eachForm.formModel = null;
            });
            //forgot password reset
            angular.forEach(scope.forgotPasswordFormBuildInfo, function(eachForm) {
                eachForm.formModel = null;
            });
        };
        scope.signIn = function(isDisabled) {
            if (!isDisabled) {
                scope.signInRequestObject.password = scope.loginFormBuildInfo.password.formModel;
                scope.signInRequestObject.userName = scope.loginFormBuildInfo.userName.formModel;
                requestService.invokeService(requestAndResponse.signInRequest, 'POST', null, scope.signInRequestObject).then(function(response) {
                    myStorage.setItem('userInfo', response.data.message);
                    myStorage.setItem('userLogged', response.data.message.state);
                    if (response.data.type === "error") {
                        rootScope.wrongCredentials = response.data.message;
                    } else {
                        myStorage.setItem('authToken', response.data.message.authToken);
                        myStorage.setItem('userName', response.data.message.userName);
                        state.go('dashboard');
                    }
                });
            }
        };
        scope.forgotPassword = function() {
            rootScope.beforeLogin = false;
            rootScope.isForgotPassword = true;
            rootScope.isToggleButton = false;
        };
        scope.forgotPasswordRequest = function(isDisabled) {
            if (!isDisabled) {
                scope.forgotPasswordRequestObject.email = scope.forgotPasswordFormBuildInfo.primaryEmail.formModel;
                requestService.invokeService(requestAndResponse.forgotPasswordEmailRequest, 'POST', null, scope.forgotPasswordRequestObject).then(function(response) {
                    if (response.data.type === "success") {
                        scope.checkEmail = response.data.message;
                        scope.invalidEmail = false;
                    }
                    if (response.data.type === "error") {
                        scope.invalidEmail = response.data.message;
                        scope.checkEmail = false;
                    }
                });
            }
        };
    }
]);
