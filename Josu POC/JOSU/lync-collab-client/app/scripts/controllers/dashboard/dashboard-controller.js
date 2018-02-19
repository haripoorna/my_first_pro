'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:dashboardController
 * @description
 * # DashboardController
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('dashboardController', ['homePageConfig', '$scope', '$state', 'constants', 'commonService','requestService', 'requestAndResponse', 'addJob',
    function(homePageConfig, scope, state, constants, commonService,requestService, requestAndResponse, addJob) {
        var myStorage = localStorage;
        // creating the request response object
        scope.requestObject = {
            'authToken': null,
            'userName': null,
            'info': {}
        };
        // header information start here
        // sign in label information
        scope.headerProfile = constants.profile;
        scope.headerLogout = constants.logout;
        scope.addJobText = constants.addJob;
        // header information ends here
        scope.userLogged = myStorage.getItem('userLogged');
        scope.authToken = myStorage.getItem('authToken');
        scope.userName = myStorage.getItem('userName');
        scope.addJobFormBuildInfo = addJob.properties.jobDetails.formInfo;
        scope.addJobFormProperties = addJob.properties;
        scope.addJob = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.authToken = scope.authToken;
                scope.requestObject.userName = scope.userName;
                angular.forEach(scope.addJobFormProperties, function(value) {
                    angular.forEach(value.formInfo, function(formInfoObject, formInfoKey) {
                        scope.requestObject.info[formInfoKey] = formInfoObject.formModel;
                    });
                });
                requestService.invokeService(requestAndResponse.jobPostRequest, 'POST', null, scope.requestObject).then(function(response) {
                    if (response.data) {}
                });
            }
        };
    }
]);
