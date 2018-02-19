'use strict';

describe('Controller: afterLoginHeaderController', function() {

    // load the controller's module
    beforeEach(module('lyncSchoolApp'));
    var scope, homePageConfig, constants,afterLoginHeaderController;
    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller,$injector,$rootScope,_homePageConfig_, _constants_) {
        scope = $rootScope.$new();

        homePageConfig = _homePageConfig_;
        constants = _constants_
       

        afterLoginHeaderController = $controller('afterLoginHeaderController', {
            $scope: scope,
            homePageConfig: homePageConfig,
            constants: _constants_
           
                // place here mocked dependencies
        });
         
}));
   it('after LoginHeader Controller must be defined',function(){
            expect(afterLoginHeaderController).toBeDefined();
});

 it('variables to be defined', function() {
       
        var tabs = {
            "Home": {
                "isActive": true
            },
            "About Us": {
                "isActive": false
            },
            "Contact Us": {
                "isActive": false
            }
        }
        expect(scope.tabs).toEqual(tabs);

      

    });


});