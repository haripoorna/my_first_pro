'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:studentDashboardCtrl
 * @description
 * # StudentDashboardCtrl
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp')
    .controller('studentDashboardController', ['$scope', '$rootScope', '$mdSidenav', 'dashboardToggle', 'requestService', 'requestAndResponse', 'constants',
        function(scope, rootScope, mdSidenav, dashboardToggle, requestService, requestAndResponse, constants) {
            rootScope.fetchTableData = function(userList, isOnLoad) {
                scope.isStatus = false;
                if (userList.toLowerCase() === constants.employerList) {
                    scope.isStatus = false;
                    scope.requestURL = requestAndResponse.employerListResponse;
                } else {
                    scope.requestURL = requestAndResponse.jobListResponse;
                    scope.isStatus = true;
                }
                requestService.invokeService(scope.requestURL, 'GET', null, null).then(function(response) {
                    scope.list = response.data;
                    scope.totalItems = scope.list.length;
                    scope.currentPage = 1;
                    scope.itemsPerPage = 10;
                    scope.$watch("currentPage", function() {
                        setPagingData(scope.currentPage);
                    });

                    function setPagingData(page) {
                        var pagedData = scope.list.slice(
                            (page - 1) * scope.itemsPerPage,
                            page * scope.itemsPerPage
                        );
                        rootScope.dataList = pagedData;
                    }
                    if (isOnLoad) {
                        document.getElementById(dashboardToggle.toggleInfo.studentTabs[0].id).checked = true;
                    }
                });
            };
            rootScope.fetchTableData(dashboardToggle.toggleInfo.studentTabs[0].label, true);

            scope.slideInfo = buildToggler('info');

            function buildToggler(navID) {
                return function() {
                    scope.isDropdown = false;
                    mdSidenav(navID).toggle();
                };
            };
            rootScope.closeInfo = function() {
                mdSidenav('info').close();
            };

            scope.getJobInfo = function(info) {
                rootScope.jobInfo = info;
            };
            scope.jobStatusObject = {
                userName : null,
                jobId : null
            }
            scope.confirm = function(info) {
                scope.jobStatusObject.userName = localStorage.getItem('userName');
                scope.jobInfo = info;
                angular.forEach(scope.jobInfo, function(eachObject){
                    if(eachObject.jobId) {
                        scope.jobStatusObject.jobId = eachObject.jobId;
                    }
                });
                requestService.invokeService(requestAndResponse.jobPostStatus, 'POST', null, scope.jobStatusObject).then(function(response) {
                    if(response.data){
                        angular.forEach(scope.jobInfo, function(eachObject){
                            if(eachObject.status) {
                                eachObject.status = 'Applied';
                            }
                        });
                    }
                });
            }
        }
    ]);
