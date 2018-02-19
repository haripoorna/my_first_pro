'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:adminDashboardController
 * @description
 * # AdminDashboardCtrl
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('adminDashboardController', ['$scope', '$rootScope', '$mdComponentRegistry', '$mdSidenav', 'dashboardToggle', 'requestService', 'requestAndResponse', 'constants',
    function(scope, rootScope, mdComponentRegistry, mdSidenav, dashboardToggle, requestService, requestAndResponse, constants) {
        rootScope.fetchTableData = function(userList, isOnLoad) {
            scope.isApplications = false;
            scope.errorWhenPushed = false;
            if (userList.toLowerCase() === constants.studentList) {
                scope.requestURL = requestAndResponse.studentListResponse;
            } else if (userList.toLowerCase() === constants.employerList) {
                scope.requestURL = requestAndResponse.employerListResponse;
            } else if (userList.toLowerCase() === constants.collegeList) {
                scope.requestURL = requestAndResponse.collegeListResponse;
            } else if (userList.toLowerCase() === constants.applications) {
                rootScope.colleges = [];
                scope.isApplications = true;
                requestService.invokeService(requestAndResponse.pipelinejobs, 'GET', null, null).then(function(response) {
                    rootScope.dataList = response.data;
                });
                requestService.invokeService(requestAndResponse.collegeLists, 'GET', null, null).then(function(response) {
                    angular.forEach(response.data, function(eachCollege){
                        rootScope.colleges.push({
                            'name': eachCollege,
                            'isSelected': false
                        });
                    });
                });
            }
            if (!scope.isApplications) {
                requestService.invokeService(scope.requestURL, 'GET', null, null).then(function(response) {
                    scope.list = response.data;
                    scope.totalItems = scope.list.length;
                    scope.currentPage = 1;
                    scope.itemsPerPage = 20;
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
                });
            }
            if (isOnLoad) {
                setTimeout(function(){
                    document.getElementById(dashboardToggle.toggleInfo.adminTabs[0].id).checked = true;
                }, 100);
            }
        };
        rootScope.fetchTableData(dashboardToggle.toggleInfo.adminTabs[0].label, true);
        scope.selectApplication = function(application) {
            if (!application.isInfoSelected) {
                scope.selectedJobs = [];
                application.isSelected = !application.isSelected;
                angular.forEach(rootScope.dataList, function(eachAapplication) {
                    if (eachAapplication.isSelected) {
                        scope.selectedJobs.push(eachAapplication);
                    }
                });
            }
        };
        scope.shareApplication = buildToggler('shareOptions');

        function buildToggler(navID) {
            return function() {
                angular.forEach(rootScope.dataList, function(eachAapplication) {
                    if (eachAapplication.isSelected || eachAapplication.isInfoSelected) {
                        scope.openSideNav = true;
                    }
                });
                if (scope.openSideNav) {
                    scope.isDropdown = false;
                    mdSidenav(navID).toggle();
                }
            };
        };
        rootScope.selectCollege = function(college) {
            rootScope.selectedColleges = [];
            college.isSelected = !college.isSelected;
            angular.forEach(rootScope.colleges, function(eachCollege) {
                if (eachCollege.isSelected) {
                    rootScope.selectedColleges.push(eachCollege);
                }
            });
        };
        rootScope.closeShareOptions = function() {
            scope.selectedJobs = [];
            angular.forEach(rootScope.dataList, function(eachAapplication) {
                eachAapplication.isInfoSelected = false;
                eachAapplication.isSelected = false;
            });
            angular.forEach(rootScope.colleges, function(eachCollege) {
                eachCollege.isSelected = false;
            });
            rootScope.infoSelected = false;
            mdSidenav('shareOptions').close();
        };
        rootScope.shareJobsWithColleges = function() {
            scope.jobsSelected = [];
            scope.collegesSelected = [];
            if (rootScope.selectedColleges.length > 0) {
                angular.forEach(scope.selectedJobs, function(eachJob) {
                    if(eachJob.isSelected) {
                        scope.jobsSelected.push(eachJob.jobId);
                    }
                });
                angular.forEach(rootScope.selectedColleges, function(eachCollege) {
                    if(eachCollege.isSelected) {
                        scope.collegesSelected.push(eachCollege.name);
                    }
                });
                requestService.invokeService(requestAndResponse.transferPipeLine, 'POST', null, {'jobs':scope.jobsSelected, 'colleges':scope.collegesSelected}).then(function(response) {
                    if(response.status === 200) {
                        scope.errorWhenPushed = false;
                        scope.closeShareOptions(); 
                    } else {
                        scope.errorWhenPushed = true;   
                    }
                });
            }
        };
        scope.openJobInfo = function(application) {
            if (!application.isSelected) {
                rootScope.currentApplication = angular.copy(application);
                application.isInfoSelected = true;
                scope.shareApplication();
                rootScope.infoSelected = true;
            }
        };
        scope.$watch(function() {
            return mdComponentRegistry.get('shareOptions') ? mdSidenav('shareOptions').isOpen() : false;
        }, function(newVal) {
            if (!newVal) {
                scope.closeShareOptions();
            }
        });
    }
]);