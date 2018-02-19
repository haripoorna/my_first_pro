'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:activationCtrl
 * @description
 * # ActivationCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('activationController', ['$scope','$state','$location', 'activation', 'constants','requestService','requestAndResponse',
    function(scope,state,location, activation, constants,requestService,requestAndResponse,window) {
        // creating the request response object
        scope.requestObject = {
            "Password": null,
            "Token": null
        };

        // activation Page form Information
        scope.formBuildInfo = activation.properties.formInfo;
        console.log(scope.formBuildInfo);
        scope.passwordBanner = activation.properties.formImagePath;
        scope.activationTitle = constants.activationTitle;
        scope.signIn = constants.signIn;

        scope.activationSignIn = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.Token = location.search().token;
                scope.requestObject.Password=scope.formBuildInfo.Password.formModel;
                requestService.invokeService(requestAndResponse.activationRequest,'POST', null, scope.requestObject).then(function(response) {
                    console.log(response);
                    console.log(response.data);
                    if (response.data=="Account Activated") {
                       state.go('activationSuccess');
                    }
                });
            }
        }
    }

]);
