'use strict';

describe('Controller: beforeLoginHeaderController', function() {

    // load the controller's module
    beforeEach(module('lyncSchoolApp'));
    var scope, homePageConfig, constants,beforeLoginHeaderController;
    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller,$injector,$rootScope,_homePageConfig_, _constants_) {
        scope = $rootScope.$new();

        homePageConfig = _homePageConfig_;
        constants = _constants_
       

        beforeLoginHeaderController = $controller('beforeLoginHeaderController', {
            $scope: scope,
            homePageConfig: homePageConfig,
            constants: _constants_
           
                // place here mocked dependencies
        });
         
}));
   it('beforeLoginHeader Controller must be defined',function(){
            expect(beforeLoginHeaderController).toBeDefined();
});




});