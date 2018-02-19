'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:FooterController
 * @description
 * # footerController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('footerController', ['$scope', 'footerInfo', function(scope, footerInfo) {
        //home-page content info
        scope.footerContent = footerInfo;
    }
]);