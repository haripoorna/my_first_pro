'use strict';
/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:employerTableController
 * @name lyncSchoolApp.controller:employerTableController
 * @description
 * # employerTableController
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('employerTableController', ['$scope', '$http','requestService', 'requestAndResponse', function(scope, $http,requestService, requestAndResponse) {
    scope.studentList=[];
    scope.collegeList=[];
    requestService.invokeService(requestAndResponse.studentListResponse, 'GET', null, null).then(function(response) {
        scope.studentList = response.data;
        console.log(scope.studentList);
    });
    requestService.invokeService(requestAndResponse.collegeListResponse, 'GET', null, null).then(function(response) {
        scope.collegeList = response.data;
        console.log(scope.collegeList);
    });
}]);
