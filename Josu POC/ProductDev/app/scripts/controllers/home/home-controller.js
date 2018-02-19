'use strict';

/**
 * @ngdoc function
 * @name yeomaTabledirectiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomaTabledirectiveApp
 */
angular.module('productDevApp')
    .controller('tableController', ['$scope', '$http', '$filter', 'formStudent', function($scope, $http, $filter, formStudent) {
        $scope.SignUpformBuildInfo = formStudent.properties;
        $scope.users = [];
        $http.get('data.json').then(function(response) {
            $scope.users = response.data;
            var users = $scope.users;
            $scope.totalItems = users.length;
            $scope.currentPage = 1;
            $scope.itemsPerPage = 20;
            $scope.maxSize = 5;


            /*$scope.slider = {
                  min: 0,
                  max: 100,
                  floor: 0,
                  ceil: 100   
            };*/

            $scope.slider = {
                min: 0,
                max: 100,
                modelMin: 0,
                modelMax: 100,
                stepSize: 1,
                decimalPlaces: 2
            };
            $scope.fnHandleUp = function(sliderValue) {
                console.log(sliderValue)
            };


        });
    }]);
