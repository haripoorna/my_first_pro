'use strict';

angular.module('productDevApp').directive('formDirective', function() {


  
    return {
        restrict: 'E',
        scope: {
            formData: '=formBuildData'
        },
        templateUrl: '../../views/form/formBuilder.html',
        link: function(scope) {
            console.log(scope.formData);
        }
    };
});
