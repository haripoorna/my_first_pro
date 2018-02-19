angular.module('productDevApp')
.directive('tableDirective', function() {
    return {
        restrict: 'E',
        scope: {
            tableData: '=data',
        },
        templateUrl: '../views/table/table.html',
        link: function(scope, element, attrs, controller) {
            console.log("scope value",scope);
            console.log("element",element);
            console.log("attrs",attrs);
            console.log("controller",controller);

             scope.$watch('tableData', function(newValue, oldValue) {
                scope.objectKeys = [];
                    if (newValue !== oldValue) {
                    scope.tableData = newValue;
                    angular.forEach(scope.tableData, function(user) {
                        angular.forEach(Object.keys(user), function(eachkey) {
                            if(Object.keys(user).length !== scope.objectKeys.length) {
                                scope.objectKeys.push(eachkey);
                            }
                        });
                    });
                } 

                  
            });   
            }
        }
            
})