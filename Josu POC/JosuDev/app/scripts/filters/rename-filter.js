'use strict';

// sample usage
// data-ng-bind="request.requestName | rename"

angular.module('lyncDigitalApp').filter('rename', function() {
  var index = null;
  return function(text) {
    if (text && text.indexOf(' ') === -1) {
      for(index = 0; index<text.length; index++) {
        if(text.charAt(index) === text.charAt(index).toUpperCase()) {
          if(index) {
            text = text.slice(0, index) + ' ' + text.slice(index);
            break;
          }
        }
      }
      return text;
    }
  };
});