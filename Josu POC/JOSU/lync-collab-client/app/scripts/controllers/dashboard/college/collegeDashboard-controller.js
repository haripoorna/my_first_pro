'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:collegeDashboardCtrl
 * @description
 * # CollegeDashboardCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp')
    .controller('collegeDashboardController', ['$scope', 'requestService', 'requestAndResponse', 'constants', function(scope, requestService, requestAndResponse, constants) {
        scope.employerList = [];
        scope.studentList = [];
        scope.addJobText = constants.addJob;
        requestService.invokeService(requestAndResponse.employerListResponse, 'GET', null, null).then(function(response) {
            scope.employerList = response.data;
            scope.dataList = scope.employerList;
        });
        requestService.invokeService(requestAndResponse.studentListResponse, 'GET', null, null).then(function(response) {
            scope.studentList = response.data;
            scope.dataList = scope.studentList;
        });
        scope.fetchTableData = function(user) {
            if (user === constants.student) {
                scope.dataList = scope.studentList;
            } else {
                scope.dataList = scope.employerList;
            }
        };
    }]);
