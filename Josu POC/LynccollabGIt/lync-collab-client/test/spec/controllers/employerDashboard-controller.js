'use strict';

describe('Controller:employer dashboard controller', function() {

    // load the controller's module
    beforeEach(module('lyncSchoolApp'));

    var scope, employerDashboardController, constants, addJob;
    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _constants_, _addJob_) {
        scope = $rootScope.$new();
        constants = _constants_;
        addJob = _addJob_;

        employerDashboardController = $controller('employerDashboardController', {
            $scope: scope,
            constants: _constants_,
            addJob: _addJob_
        });
    }));

    it('employerDashboard controller should be defined', function() {
        expect(employerDashboardController).toBeDefined()
    });
    it('variables to be defined',function(){
        expect(scope.addJobText).toEqual('ADD JOB');
        var dummyaddJobFormBuildInfo= {
                    "jobtitle": {
                        "title": "JOB TITLE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "requiredskills": {
                        "title": "REQUIRED SKILLS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "description": {
                        "title": "JOB DESCRIPTION",
                        "type": "textarea",
                        "formModel": null,
                        "maxLength": 300,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "css": "full-width"
                    }
                }
        expect(scope.addJobFormBuildInfo).toEqual(dummyaddJobFormBuildInfo);
    });
    it('resetAddJobText to be defined',function(){
        scope.resetAddJobText();
    });


});
