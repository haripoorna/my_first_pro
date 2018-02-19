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
                    angular.forEach(scope.tableData, function(tuple) {
                        angular.forEach(Object.keys(tuple), function(eachkey) {
                            if (Object.keys(tuple).length !== scope.objectKeys.length) {
                                scope.objectKeys.push(eachkey);
                            }
                        });
                    });
                }
            });
        }
    };
});