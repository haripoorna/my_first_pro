describe('tableDirective:', function() {

    var $compile;
    var $rootScope;
    beforeEach(module('lyncSchoolApp'));
    beforeEach(function() {
        module('lyncSchoolApp');

        beforeEach(inject(function(_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
    });



});
