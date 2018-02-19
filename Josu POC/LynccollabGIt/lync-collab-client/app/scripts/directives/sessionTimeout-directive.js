'use strict';

angular.module('lyncSchoolApp').directive('sessionTimeout', function($interval, $rootScope, $sessionStorage, $timeout, $location, $localStorage) {
    return {
        restrict: 'A',
        scope: {
            idleTime: '@',
            warningTime: '@'
        },
        link: function(scope, element, attrs) {
            // List all the inactive states
            // Inactive state --> Absence of session
            var unSecureStates = ['/home', '/login', '/loginError', '/forgotPassword', '/accountLocked', '/registration', '/activation'];
            // Get the current path
            var currentState = $location.path();
            // Intializing the timer flag
            // This flag is set for the active state
            // Active state --> Presence of session
            var startTimer = 0;
            // Warning to the developer on input constraints
            // Checking for the active state for the first time
            startTimer = unSecureStates.indexOf(currentState);
            // If active state it starts the timer
            if (startTimer < 0) {
                // Converting the timeout variables into seconds
                var endTime = attrs.idleTime * 60;
                var warnTime = attrs.warningTime * 60;
                // Extracting the start time
                var startTime = new Date();
                // Initializing the local session timeout variable
                scope.stopwatch = 0;
                // Calculating the session interval
                $interval(function() {
                    startTimer = 0;
                    // Checking for the active state if navigated from the active state to inactive state or vice versa
                    currentState = $location.path();
                    startTimer = unSecureStates.indexOf(currentState);
                    if (startTimer < 0) {
                        // Checking for the active events
                        element.mousemove(function() {
                            // Re-intializing the start time
                            startTime = new Date();
                        });
                        element.click(function() {
                            // Re-intializing the start time
                            startTime = new Date();
                        });
                        element.keypress(function() {
                            // Re-intializing the start time
                            startTime = new Date();
                        });
                        // Calculating the the local session timeout
                        scope.stopwatch = (new Date() - startTime) / 1000;
                        if (Math.round(scope.stopwatch) === (endTime - warnTime)) {
                            // Triggers a warning when the local session timeout equals the global warning timeout
                            // angular.element('#warningModal').modal('show');
                            $rootScope.remainingTimeMin = parseInt(warnTime / 60);
                            $rootScope.remainingTimeSec = parseInt(warnTime % 60);
                        } else if (Math.round(scope.stopwatch) >= (endTime - warnTime)) {
                            // Calculating the remaining time left for session time out
                            warnTime--;
                            $rootScope.remainingTimeMin = parseInt(warnTime / 60);
                            $rootScope.remainingTimeSec = parseInt(warnTime % 60);
                        }
                        if (Math.round(scope.stopwatch) === endTime || warnTime <= 0) {
                            // Navigates to the logout when the local session timeout equals the global session timeout
                            $sessionStorage.$reset();
                            $localStorage.$reset();
                            //Hide the warning modal
                            // angular.element('#warningModal').modal('hide');
                            //Show the logout ghost page
                            // angular.element('#sessionTimedOut').show();
                            //Take user to the login page after 4 seconds
                            $timeout(function() {
                                // Redirection code goes here
                            }, 4000);
                        }
                    }
                }, 1000);
            }
        }
    };
});
