'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:collegeDashboardCtrl
 * @description
 * # CollegeDashboardCtrl
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp')
    .controller('collegeDashboardController', ['$scope', '$rootScope', 'dashboardToggle',
        'requestService', 'requestAndResponse', 'constants',
        function(scope, rootScope, dashboardToggle, requestService, requestAndResponse, constants) {
            rootScope.fetchTableData = function(userList, isOnLoad) {
                if (userList.toLowerCase() === constants.employerList) {
                    scope.requestURL = requestAndResponse.employerListResponse;
                } else {
                    scope.requestURL = requestAndResponse.studentListResponse;
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
                        document.getElementById(dashboardToggle.toggleInfo.collegeTabs[0].id).checked = true;
                    }
                });
            };
            rootScope.fetchTableData(dashboardToggle.toggleInfo.collegeTabs[0].label, true);
        }
    ]);
