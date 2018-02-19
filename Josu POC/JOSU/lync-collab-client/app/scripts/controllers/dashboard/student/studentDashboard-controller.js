'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:studentDashboardCtrl
 * @description
 * # StudentDashboardCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp')
    .controller('studentDashboardController', ['$scope', 'requestService', 'requestAndResponse', 'constants',
        function(scope, requestService, requestAndResponse, constants) {
            scope.employerList = [];
            scope.jobList = [];
            requestService.invokeService(requestAndResponse.employerListResponse, 'GET', null, null).then(function(response) {
                scope.employerList = response.data;
                scope.dataList = scope.employerList;
            });
            requestService.invokeService(requestAndResponse.collegeListResponse, 'GET', null, null).then(function(response) {
                scope.jobList = response.data;
                scope.dataList = scope.jobList;
            });
            scope.fetchTableData = function(user) {
                if (user === constants.employer) {
                    scope.dataList = scope.employerList;
                } else {
                    scope.dataList = scope.jobList;
                }
            };
        }
    ]);
