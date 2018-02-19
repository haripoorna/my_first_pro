'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:employerDashboardCtrl
 * @description
 * # EmployerDashboardCtrl
 * Controller of the lyncSchoolApp
 */
angular.module('lyncSchoolApp')
    .controller('employerDashboardController', ['$scope', 'constants', 'addJob', function(scope, constants, addJob) {

        // addJob text information
        scope.addJobText = constants.addJob;

        // addJob form builder
        scope.addJobFormBuildInfo = addJob.properties.jobDetails.formInfo;

        scope.resetAddJobText = function() {
            angular.forEach(scope.addJobFormBuildInfo, function(eachForm) {
                eachForm.formModel = null;
            });
        }
    }]);
