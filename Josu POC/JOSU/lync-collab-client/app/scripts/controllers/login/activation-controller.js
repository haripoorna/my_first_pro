'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:activationCtrl
 * @description
 * # ActivationCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('activationController', ['$scope', '$state', '$location', 'activation', 'constants', 'requestService', 'requestAndResponse',
    function(scope, state, location, activation, constants, requestService, requestAndResponse) {
    	// creating the request response object
        scope.requestObject = {
            "password": null,
            "token": null
        };
        // activation Page form Information
        scope.formBuildInfo = activation.properties.formInfo;
        scope.passwordBanner = activation.properties.formImagePath;
        scope.activationTitle = constants.activationTitle;
        scope.signIn = constants.signIn;
        scope.activationSignIn = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.token = location.path().split('/')[2];
                scope.requestObject.password = scope.formBuildInfo.password.formModel;
                requestService.invokeService(requestAndResponse.activationRequest, 'POST', null, scope.requestObject).then(function(response) {
                    if(response.data) {
                    	state.go('activationSuccess');
                    }
                });
            }
        }
    }
]);
