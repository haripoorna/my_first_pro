'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:editProfileController
 * @description
 * # EditProfileController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('editProfileController', ['$scope', '$rootScope', '$state', 'formLogin', 'requestService', 'requestAndResponse',
    'constants', 'registrationInfo', 'formEmployer', 'formStudent', 'formCollege', 'filterOptions', 'Upload', 'dashboardToggle',
    function(scope, rootScope, state, formLogin, requestService, requestAndResponse, constants, registrationInfo, formEmployer, formStudent, formCollege, filterOptions, Upload, dashboardToggle) {
        // creating the request response object for sign-up
        scope.requestObject = {
            'info': {}
        };
        rootScope.colleges = [];
        var myStorage = localStorage;
        scope.userLogged = myStorage.getItem('userLogged');
        scope.authToken = myStorage.getItem('authToken');
        scope.userName = myStorage.getItem('userName');

        scope.username = constants.userName;
        scope.emailID = constants.emailID;
        scope.editProfile = constants.editProfile;
        // setting flags  
        rootScope.isRegistrationForm = false;
        var myStorage = localStorage;
        // login sign up
        scope.loginSignUp = constants.signUp;
        // sign-up header info
        scope.signUpHeaderInfo = registrationInfo.signUpInfo.signUpHeaderInfo;
        //sign-up info
        scope.signUpInfo = registrationInfo.signUpInfo.details;
        // sign-up success info
        scope.registrationSuccessInfo = registrationInfo.signUpInfo.signUpSuccessInfo;
        // branches list 
        scope.branchList = filterOptions.student.branches;
        scope.isYearOfPassoutSelected = function() {
            scope.date = new Date();
            var presentYear = scope.date.getFullYear();
            scope.yearList = [];
            for (var initialDate = 2010; initialDate <= presentYear; initialDate++) {
                scope.yearList.push(initialDate);
            }
        }
        scope.isYearOfPassoutSelected();
        rootScope.editProfile = function() {
            rootScope.isLeftNavigation = true;
            rootScope.isRegistrationForm = true;
            if (scope.userLogged.toLowerCase() === constants.college) {
                scope.editFormBuildInfo = formCollege.properties;
            }
            if (scope.userLogged.toLowerCase() === constants.employer) {
                scope.editFormBuildInfo = formEmployer.properties;
            }
            if (scope.userLogged.toLowerCase() === constants.student) {
                scope.editFormBuildInfo = formStudent.properties;
            }
            // Resets form data
            angular.forEach(scope.editFormBuildInfo, function(formObject, formKey) {
                angular.forEach(formObject.formInfo, function(formInfoObject, formInfoKey) {
                    formInfoObject.formModel = null;
                });
            });
            scope.getFormHeader(scope.editFormBuildInfo);
            scope.checkNavigators();
            requestService.invokeService(requestAndResponse.editProfileDetails, 'GET', null, null).then(function(response) {
                scope.userDetails = response.data;
            });
            requestService.invokeService(requestAndResponse.collegeLists, 'GET', null, null).then(function(response) {
                angular.forEach(response.data, function(eachCollege) {
                    rootScope.colleges.push(eachCollege);
                });
            });
        };
        scope.getFormHeader = function(formData) {
            angular.forEach(formData, function(formValue) {
                if (formValue.isSelected) {
                    scope.formHeader = formValue.header;
                }
            });
        };
        scope.getNextOrPrevious = function() {
            scope.tempIndex = 0;
            angular.forEach(scope.editFormBuildInfo, function(formObject, formKey) {
                formObject.isSelected = false;
                if (scope.selectedIndex === scope.tempIndex) {
                    formObject.isSelected = true;
                }
                scope.tempIndex++;
            });
            scope.getFormHeader(scope.editFormBuildInfo);
            scope.checkNavigators();
        };
        scope.navigateRegistration = function(isNavigation, isRight, isValid) {
            if (isNavigation) {
                if (isRight && isValid) {
                    scope.selectedIndex = scope.currentIndex + 1;
                    scope.getNextOrPrevious();
                } else if (!isRight) {
                    scope.selectedIndex = scope.currentIndex - 1;
                    scope.getNextOrPrevious();
                }
            }
        };
        scope.checkNavigators = function() {
            scope.currentIndex = 0;
            scope.activeHeaderFound = false;
            scope.formLength = Object.keys(scope.editFormBuildInfo).length;
            angular.forEach(scope.editFormBuildInfo, function(formObject, formKey) {
                if (formObject.isSelected && !scope.activeHeaderFound) {
                    scope.activeHeaderFound = true;
                }
                if (!scope.activeHeaderFound) {
                    scope.currentIndex++;
                }
            });
            scope.disableNavigators();
        };
        scope.disableNavigators = function() {
            scope.disableRightNavigation = false;
            scope.disableLeftNavigation = false;
            if (scope.currentIndex === scope.formLength - 1) {
                scope.disableRightNavigation = true;
            } else if (!scope.currentIndex) {
                scope.disableLeftNavigation = true;
            }
        };
        scope.checkAvailability = function(fieldObject) {
            scope.checkAvailabilityObject = {
                "check": null
            };
            scope.isUserOrEmail = false;
            if (fieldObject.title.trim().toLowerCase() === scope.username) {
                scope.isUserOrEmail = true;
                scope.checkAvailabilityObject.check = fieldObject.formModel;
                scope.checkAvailabilityURL = requestAndResponse.userNameCheckRequest;
            } else if (fieldObject.title.trim().toLowerCase() === scope.emailID) {
                scope.isUserOrEmail = true;
                scope.checkAvailabilityObject.check = fieldObject.formModel;
                scope.checkAvailabilityURL = requestAndResponse.emailCheckRequest;
            }
            if (scope.isUserOrEmail) {
                requestService.invokeService(scope.checkAvailabilityURL, 'POST', null, scope.checkAvailabilityObject).then(function(response) {
                    if (response.data.type === "userName") {
                        rootScope.userNameErrorMessage = true;
                        scope.userCheckMessage = response.data.message;
                    } else if (response.data === "success") {
                        rootScope.userNameErrorMessage = false;
                    }
                    if (response.data.type === "email") {
                        rootScope.emailErrorMessage = true;
                        scope.emailCheckMessage = response.data.message;
                    } else if (response.data === "success") {
                        rootScope.emailErrorMessage = false;
                    }
                });
            }
        };
        scope.update = function(isDisabled) {
            if (!isDisabled) {
                scope.requestObject.info = scope.userDetails;
                requestService.invokeService(requestAndResponse.updateProfile, 'POST', null, scope.requestObject).then(function(response) {
                    if (response.data.type === "success") {
                        scope.isRegistrationSuccess = response.data.message;
                        rootScope.isRegistrationForm = false;
                    }
                });
            }
        };
        scope.fnCheckForNameExistence = function(title) {
            if (title.toLowerCase() == scope.username) {
                rootScope.userNameErrorMessage = false;
            } else if (title.toLowerCase() == scope.emailID) {
                rootScope.emailErrorMessage = false;
            }
        };
        scope.croppedDataUrl = "";
        $('#uploadProfilePic').on('show.bs.modal', function(e) {
            scope.croppedDataUrl = dashboardToggle.toggleInfo.profilePicture;
            scope.profilePicture = dashboardToggle.toggleInfo.profilePicture;
            scope.picFile = undefined;
        })
        rootScope.fnUpload = function(dataUrl, file) {
            var authToken = localStorage.getItem('authToken');
            var userName = localStorage.getItem('userName');
            scope.file = file;
            if (authToken) {
                var headers = {
                    'authorization': authToken,
                    'userName': userName
                }
            }
            Upload.upload({
                url: 'http://192.168.1.40:9000/routes/upload', //webAPI exposed to upload the file
                data: { file: file }
            }).then(function(response) { //upload function returns a promise
                if (response) {
                    $('#uploadProfilePic').modal('hide');
                    scope.uploadSuccess = response.data;
                }
            });
        }
    }
]);
