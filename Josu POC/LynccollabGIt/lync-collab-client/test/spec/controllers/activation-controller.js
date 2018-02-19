'use strict';

describe('Controller: activationController',function () {
	
	 // load the controller's module
    beforeEach(module('lyncSchoolApp'));

    var scope,activationController,constants,activation;

    beforeEach(inject(function($controller, $rootScope, _constants_, _activation_) {
        scope = $rootScope.$new();
        constants = _constants_;
        activation = activation;

        activationController = $controller('activationController', {
            $scope: scope,
            constants: _constants_,
            activation: _activation_
        });
    }));

    it('activation controller should be defined', function() {
        expect(activationController).toBeDefined()
    });
    it('variables to be defined',function(){
    	scope.formBuildProperties = {
            "formInfo": {
                "password": {
                    "title": "PASSWORD",
                    "type": "password",
                    "formModel": null,
                    "minLength":8,
                    "maxLength": 30,
                    "required": true,
                    "pattern": "^[a-zA-Z\s]+$",
                    "validationMessage": "This is required",
                    "patternValidation":"Password should contain only alphabets"
                },
                "confirmPassword": {
                    "title": "CONFIRM PASSWORD",
                    "type": "password",
                    "formModel": null,
                    "maxLength": 30,
                    "required": true,
                    "pattern": null,
                    "validationMessage": null,
                    "passwordMatchMessage":"Password doesn't match"
                }
            },
            "formImagePath": "images/employer.svg"
        }
        expect(scope.formBuildInfo).toEqual(scope.formBuildProperties.formInfo);
        expect(scope.passwordBanner).toEqual(scope.formBuildProperties.formImagePath);
        expect(scope.activationTitle).toEqual("SET PASSWORD");
        expect(scope.signIn).toEqual("SIGN IN");
    });
})