'use strict';
/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:employerTableController
 * @name lyncSchoolApp.controller:employerTableController
 * @description
 * # employerTableController
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('collegeTableController', ['$scope', '$http', 'requestService', 'requestAndResponse', function(scope, $http,requestService, requestAndResponse) {
    scope.employerList = [];
    scope.studentList = [];
    requestService.invokeService(requestAndResponse.employerListResponse, 'GET', null, null).then(function(response) {
        scope.employerList = response.data;
        console.log(scope.employerList);
    });
    requestService.invokeService(requestAndResponse.studentListResponse, 'GET', null, null).then(function(response) {
        scope.studentList = response.data;
        console.log(scope.studentList);
    });
}]);