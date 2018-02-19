'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:setPasswordCtrl
 * @description
 * # setPasswordCtrl
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('setPasswordController', ['$scope', '$state', '$location', 'setPassword', 'constants', 'requestService', 'requestAndResponse',
    function(scope, state, location, setPassword, constants, requestService, requestAndResponse) {
        // creating the request object for setPassword 
        scope.requestObject = {
            "password": null,
            "token": null
        };
        // activation Page form Information
        scope.formBuildInfo = setPassword.properties.formInfo;
        scope.passwordBanner = setPassword.properties.formImagePath;
        scope.activationTitle = constants.activationTitle;
        scope.confirm = constants.confirm;
        scope.setPassword = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.token = location.path().split('/')[2];
                scope.requestObject.password = scope.formBuildInfo.password.formModel;
                requestService.invokeService(requestAndResponse.setPassword, 'POST', null, scope.requestObject).then(function(response) {
                    if (response.data.type === "success") {
                        scope.setPasswordSuccess = response.data.message;
                        setTimeout(function() {
                            state.go('home');
                        }, 2000);
                    } else if (response.data.type === "error") {
                        scope.setPasswordFailed = response.data.message;
                    }
                });
            }
        };
        scope.resetPassword = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.token = location.path().split('/')[2];
                scope.requestObject.password = scope.formBuildInfo.password.formModel;
                requestService.invokeService(requestAndResponse.resetPassword, 'POST', null, scope.requestObject).then(function(response) {
                    if (response.data.type === "success") {
                        scope.resetPasswordSuccess = response.data.message;
                        setTimeout(function() {
                            state.go('home');
                        }, 2000);
                    } else if (response.data.type === "error" ) {
                        scope.tokenInvalid = response.data.message;
                    }
                });
            }
        };
    }
]);
