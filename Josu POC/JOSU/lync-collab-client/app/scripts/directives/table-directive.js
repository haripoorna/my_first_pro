'use strict';

angular.module('lyncSchoolApp').directive('tableDirective', function() {
    return {
        restrict: 'E',
        scope: {
            tableData: '=data',
        },
        templateUrl: '../../views/table/table.html',
        link: function(scope) {
            scope.$watch('tableData', function(newValue, oldValue) {
                scope.objectKeys = [];
                if (newValue !== oldValue) {
                    scope.tableData = newValue;
                    angular.forEach(newValue[0], function(tuple) {
                        if(tuple.isPrimary) {
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
    };
});