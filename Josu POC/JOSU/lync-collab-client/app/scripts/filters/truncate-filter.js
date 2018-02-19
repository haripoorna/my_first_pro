'use strict';

//Sample usage
//data-ng-bind="bindedValue|truncate:'string name'"

angular.module('lyncSchoolApp').filter('truncate', function() {
  return function(text) {
    if (text) {
      return text;
    }
  };
});
