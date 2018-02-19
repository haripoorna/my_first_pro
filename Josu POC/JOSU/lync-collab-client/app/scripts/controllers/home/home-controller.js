'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:homeCtrl
 * @description
 * # HomeCtrl
 * Controller of the lyncSchoolApp
 */


angular.module('lyncSchoolApp').controller('homeController', ['$scope', '$state,' 'homePageConfig', 'constants', 'formCollege', 'formStudent', 'formEmployer', 'requestService', 'requestAndResponse',
    function(scope, state, homePageConfig, constants, formCollege, formStudent, formEmployer, requestService, requestAndResponse) {
        // Flags
        // header information start here
        // information of the tabs in the home page
        scope.tabs = homePageConfig.headerProperties.tabs;
        // header control information ends here
        // resets the login text
        // selection state
        scope.goToSelection = function(selectedTab) {
            // reset Active element
            angular.forEach(scope.tabs, function(eachActiveFlag) {
                eachActiveFlag.isActive = false;
            });
            // set Active Tab
            scope.tabs[selectedTab].isActive = true;
        };
    }
]);
