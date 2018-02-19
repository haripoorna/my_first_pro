'use strict';

/**
 * @ngdoc function
 * @name lyncDigitalApp.controller:tableController
 * @description
 * # TableController
 * Controller of the lyncDigitalApp
 */

angular.module('lyncDigitalApp').controller('tableController', ['$scope', '$rootScope',
    function(scope, rootScope) {
        scope.$watch('dataList', function(newValue, oldValue) {
            scope.objectKeys = [];
            if (newValue !== oldValue) {
                rootScope.dataList = newValue;
                angular.forEach(newValue[0], function(tuple) {
                    if (tuple.isPrimary) {
                        angular.forEach(Object.keys(tuple), function(eachkey) {
                            if (tuple.hasOwnProperty(eachkey) && eachkey !== 'isPrimary' && eachkey !== '$$hashKey') {
                                scope.objectKeys.push(eachkey);
                            }
                        });
                    }
                });
            }
        });
    }
]);
