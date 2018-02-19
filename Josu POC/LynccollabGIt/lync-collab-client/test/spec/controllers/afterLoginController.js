'use strict';

describe('Controller: afterLogin Controller', function() {

    // load the controller's module
    beforeEach(module('lyncSchoolApp'));

    var afterloginCtrl, scope, homePageConfig, constants;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _homePageConfig_, _constants_) {
        scope = $rootScope.$new();
        homePageConfig = _homePageConfig_;
        constants = _constants_;


        afterloginCtrl = $controller('afterLoginHeaderController', {
            $scope: scope,
            homePageConfig: homePageConfig,
            constants: _constants_
                // place here mocked dependencies
        });
    }));

    it('afterLogin controller should be defined', function() {
        expect(afterloginCtrl).toBeDefined()
    });

});
