'use strict';

angular.module('lyncDigitalApp').directive('pwCheck', function() {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = (elem.val() === angular.element(firstPassword).val());
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    };
  });
