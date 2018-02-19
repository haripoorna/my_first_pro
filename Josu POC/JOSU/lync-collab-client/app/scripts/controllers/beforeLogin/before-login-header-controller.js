'use strict';

/**
 * @ngdoc function
 * @name lyncSchoolApp.controller:beforeLoginHeaderController
 * @description
 * # BeforeLoginHeaderController
 * Controller of the lyncSchoolApp
 */

angular.module('lyncSchoolApp').controller('beforeLoginHeaderController', ['homePageConfig', '$scope', 'constants','$state',
    function(homePageConfig, scope, constants,state) {
        // header information start here
        // information of the tabs in the home page
        scope.tabs = homePageConfig.headerProperties.tabs;
        // sign in label information
        scope.headerSignIn = constants.signIn;
        // header information ends here
        // Go to Login Page
        scope.goToLogin = function() {
            state.go('login');
        };
    }
]);
