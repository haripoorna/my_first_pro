'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:employerDashboardCtrl
 * @description
 * # EmployerDashboardCtrl
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('employerDashboardController', ['$scope', 'requestService', 'requestAndResponse', 'constants','addJob', 
    function(scope, requestService, requestAndResponse, constants,addJob) {
    scope.studentList = [];
    scope.collegeList = [];
    scope.addJobText = constants.addJob;
    requestService.invokeService(requestAndResponse.collegeListResponse, 'GET', null, null).then(function(response) {
        scope.collegeList = response.data;
        scope.dataList = scope.collegeList;
    });
    requestService.invokeService(requestAndResponse.studentListResponse, 'GET', null, null).then(function(response) {
        scope.studentList = response.data;
        scope.dataList = scope.studentList;
    });
    scope.fetchTableData = function(user) {
        if (user === constants.student) {
            scope.dataList = scope.studentList;
        } else {
            scope.dataList = scope.collegeList;
        }
    };
    scope.addJobFormBuildInfo = addJob.properties.jobDetails.formInfo;
    console.log(scope.addJobFormBuildInfo)
    scope.resetAddJobText = function() {
        angular.forEach(scope.addJobFormBuildInfo, function(eachForm) {
            eachForm.formModel = null;
        });
    }
    
}]);
