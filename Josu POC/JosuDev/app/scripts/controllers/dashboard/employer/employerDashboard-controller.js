'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:employerDashboardCtrl
 * @description
 * # EmployerDashboardCtrl
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('employerDashboardController', ['$scope', '$rootScope', 'dashboardToggle', 'requestService', 'requestAndResponse', 'constants', 'addJob', '$mdSidenav', '$log', 'filterOptions',
    function(scope, rootScope, dashboardToggle, requestService, requestAndResponse, constants, addJob, mdSidenav, log, filterOptions) {
        scope.isApplications = false;
        scope.requestObject = {
            'authToken': null,
            'userName': null,
            'info': {}
        };
        scope.addJobFormDetails = addJob.properties.jobDetails;
        scope.addJobFormProperties = addJob.properties;
        //fetch table data
        rootScope.fetchTableData = function(userList, isOnLoad) {
            if (userList.toLowerCase() === constants.collegeList) {
                scope.requestURL = requestAndResponse.collegeListResponse;
                scope.isApplications = false;
            } else if (userList.toLowerCase() === constants.studentList) {
                scope.requestURL = requestAndResponse.studentListResponse;
                scope.isApplications = false;
            } else if (userList.toLowerCase() === constants.applications) {
                rootScope.branchList = [];
                scope.isApplications = true;
                scope.requestURL = requestAndResponse.studentListResponse;
                    requestService.invokeService(requestAndResponse.branchList, 'GET', null, null).then(function(response) {
                        angular.forEach(response.data, function(eachBranch) {
                            rootScope.branchList.push({
                                'type': eachBranch,
                                'isSelected': false
                            });
                        });
                    });
            }
            requestService.invokeService(scope.requestURL, 'GET', null, null).then(function(response) {
                scope.list = response.data;
                scope.referenceList = angular.copy(response.data);
                // pagination slicing
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
                scope.date = new Date();
                scope.slider = {
                    min: 2010,
                    max: scope.date.getFullYear(),
                    modelMin: 2010,
                    modelMax: scope.date.getFullYear(),
                    stepSize: 1,
                    decimalPlaces: 2
                };
                scope.fnHandleUp = function(sliderValue) {
                    scope.filtered = [];
                    angular.forEach(scope.referenceList, function(objectList) {
                        angular.forEach(objectList, function(eachObject) {
                            if (eachObject.passoutYear >= sliderValue.modelMin && eachObject.passoutYear <= sliderValue.modelMax) {
                                scope.filtered.push(objectList);
                            }
                        });
                    });
                    rootScope.dataList = scope.filtered;
                    setTimeout(function() {
                        rootScope.$apply();
                    }, 100);
                };
                // Departments filtering
                scope.filterDepartment = function(currentObject) {
                    scope.filteredBranchList = [];
                    scope.isFiltered = false;
                    currentObject.isChecked = !currentObject.isChecked;
                    angular.forEach(rootScope.branchList, function(eachBranch) {
                        if (eachBranch.isChecked) {
                            scope.isFiltered = true;
                            angular.forEach(scope.referenceList, function(objectList) {
                                angular.forEach(objectList, function(eachObject) {
                                    if (eachBranch.type === eachObject.branch) {
                                        scope.filteredBranchList.push(objectList);
                                    }
                                });
                            });
                        }
                    });
                    if (scope.isFiltered) {
                        scope.list = scope.filteredBranchList;
                    } else {
                        scope.list = scope.referenceList;
                    }
                    // pagination slicing
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
                };
                // default set toggle to be checked
                if (isOnLoad) {
                    document.getElementById(dashboardToggle.toggleInfo.employerTabs[0].id).checked = true;
                }
            });
        };
        rootScope.fetchTableData(dashboardToggle.toggleInfo.employerTabs[0].label, true);
        //add-job slider toggling 
        scope.addJob = buildToggler('addJob');
        scope.isOpenRight = function() {
            return mdSidenav('addJob').isOpen();
        };

        function buildToggler(navID) {
            return function() {
                scope.isDropdown = false;
                mdSidenav(navID).toggle();
            };
        };
        scope.close = function() {
            mdSidenav('addJob').close();
        };
        //submit add-job funtionality
        scope.submitJob = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.authToken = scope.authToken;
                scope.requestObject.userName = scope.userName;
                angular.forEach(scope.addJobFormProperties, function(value) {
                    angular.forEach(value.formInfo, function(formInfoObject, formInfoKey) {
                        scope.requestObject.info[formInfoKey] = formInfoObject.formModel;
                    });
                });
                requestService.invokeService(requestAndResponse.jobPostRequest, 'POST', null, scope.requestObject).then(function(response) {
                    if (response.data.type === "success") {
                        scope.jobPostedMessage = response.data.message;
                        scope.jobPostedSuccessMessage = true;
                    }
                });
            }
        };
        scope.resetAddJobForm = function() {
            angular.forEach(scope.addJobFormDetails.formInfo, function(eachForm) {
                eachForm.formModel = null;
            });
            scope.jobPostedSuccessMessage = false;
        }
    }
]);
