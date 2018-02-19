'use strict';

angular.module('lyncSchoolApp').factory('commonService', function() {
    let obj;
    return {
        setState: function(value) {
            this.obj = value;
        },
        getState: function() {
            return this.obj;
        }
    }
});
