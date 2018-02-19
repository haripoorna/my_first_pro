'use strict';

describe('service:employer table controller', function() {

    // load the controller's module
    beforeEach(module('lyncSchoolApp'));

    var scope, http, EmployerTableController, httpBackend;
    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _$httpBackend_, _$http_) {
        scope = $rootScope.$new();
        http = _$http_;
        // Set up the mock http service responses
        httpBackend = _$httpBackend_;
        // backend definition common for all tests
        httpBackend.whenGET('../../../data.json').respond({name: "UserName" });
        EmployerTableController = $controller('employerTableController', {
            $scope: scope,
            $http: http
                // place here mocked dependencies
        });
    }));

    it('table controller should be defined', function() {
        expect(EmployerTableController).toBeDefined()
    });
    it('users should be equal to ', function() {
        httpBackend.expectGET('../../../data.json');
        expect(scope.users).toBe('UserName');
        httpBackend.flush();

    });

});