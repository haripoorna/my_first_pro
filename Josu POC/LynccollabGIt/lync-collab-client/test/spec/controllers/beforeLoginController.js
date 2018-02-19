'use strict';

describe('Controller: beforeLogin Controller', function() {

    // load the controller's module
    beforeEach(module('lyncSchoolApp'));

    var beforeLoginCtrl, scope, homePageConfig, constants;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _homePageConfig_, _constants_) {
        scope = $rootScope.$new();
        homePageConfig = _homePageConfig_;
        constants = _constants_;


        beforeLoginCtrl = $controller('beforeLoginHeaderController', {
            $scope: scope,
            homePageConfig: homePageConfig,
            constants: _constants_
                // place here mocked dependencies
        });
    }));

    it('beforeLogin controller should be defined', function() {
        expect(beforeLoginCtrl).toBeDefined()
    });

});
