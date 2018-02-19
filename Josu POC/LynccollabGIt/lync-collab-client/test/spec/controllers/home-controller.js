'use strict';

describe('Controller: Home Controller', function() {

    // load the controller's module
    beforeEach(module('lyncSchoolApp'));
    var HomeCtrl, scope, homePageConfig, constants, formCollege, formStudent, formEmployer, requestService, requestAndResponse;


    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $injector, _homePageConfig_, _constants_, _formCollege_, _formStudent_, _formEmployer_, _requestService_, _requestAndResponse_) {
        scope = $rootScope.$new();
        homePageConfig = _homePageConfig_;
        constants = _constants_;
        formCollege = _formCollege_;
        formStudent = _formStudent_;
        formEmployer = _formEmployer_;
        requestService = _requestService_;
        requestAndResponse = _requestAndResponse_;

        HomeCtrl = $controller('homeController', {
            $scope: scope,
            homePageConfig: homePageConfig,
            constants: _constants_,
            formCollege: _formCollege_,
            formStudent: _formStudent_,
            formEmployer: _formEmployer_,
            requestService: _requestService_,
            requestAndResponse: _requestAndResponse_
                // place here mocked dependencies
        });
    }));

    it('home controller should be defined', function() {
        expect(HomeCtrl).toBeDefined()
    });
    it('function to be defined', function() {
        expect(scope.displayLogin).toBeDefined()
        expect(scope.resetLoginText).toBeDefined()
        expect(scope.goToSelection).toBeDefined()
        expect(scope.openRegistration).toBeDefined()
        expect(scope.register).toBeDefined()
        expect(scope.getFormHeader).toBeDefined()
        expect(scope.navigateRegistration).toBeDefined()
        expect(scope.checkNavigators).toBeDefined()
        expect(scope.disableNavigators).toBeDefined()
    });
    fit('variables to be defined', function() {
        expect(scope.isRoleSelected).toBe(false);
        expect(scope.isRegistration).toBe(false);
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
        var dummyLoginText = {
            "loginText": "LOGIN"
        }
        expect(scope.loginText).toEqual(dummyLoginText.loginText);
        var dummyloginSelectors = {
            "EMPLOYER": {
                "image": "images/employer.svg",
                "loginText": "EMPLOYER LOGIN",
                "registrationText": "EMPLOYER REGISTRATION",
                "cssClass": "employer-button"
            },
            "STUDENT": {
                "image": "images/student.svg",
                "loginText": "STUDENT LOGIN",
                "registrationText": "STUDENT REGISTRATION",
                "cssClass": "student-button"
            },
            "COLLEGE": {
                "image": "images/businessman.svg",
                "loginText": "COLLEGE LOGIN",
                "registrationText": "COLLEGE REGISTRATION",
                "cssClass": "college-button"
            }
        }
        expect(scope.loginSelectors).toEqual(dummyloginSelectors);
        var dummyloginFormBuildInfo = {
            "UserName": {
                "title": "Username or Email",
                "type": "text",
                "formModel": null,
                "maxLength": 20,
                "required": true,
                "pattern": null,
                "validationMessage": null
            },
            "Password": {
                "title": "Password",
                "type": "password",
                "formModel": null,
                "maxLength": 20,
                "required": true,
                "pattern": null,
                "validationMessage": null
            }
        }
        expect(scope.loginFormBuildInfo).toEqual(dummyloginFormBuildInfo)
        expect(scope.loginSignIn).toEqual("SIGN IN")
        expect(scope.loginSignUp).toBe("SIGN UP")

    });
    it('Testing the functionality of displayLogin function', function() {
        var obj = { "loginText": "asd" },
            selectedrole = "myRole";
        scope.displayLogin(obj, selectedrole);
        expect(scope.isRoleSelected).toBe(true);
        expect(scope.loginText).toBe('asd');
        expect(scope.selectedRoleObject).toEqual(obj);
    });
    it('Testing the  openRegistration functionality for college', function() {
        scope.selectedRole = "college";
        var properties = {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
                "formInfo": {
                    "firstName": {
                        "title": "FIRST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "lastName": {
                        "title": "LAST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "username": {
                        "title": "USER NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid UserName",
                        "css": "half-width"
                    },
                    "email": {
                        "title": "EMAIL ID",
                        "type": "email",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have entered invalid email.",
                        "css": "half-width"
                    }
                }
            },
            "collegeDetails": {
                "header": "College Details",
                "isSelected": false,
                "formInfo": {
                    "collegeName": {
                        "title": "COLLEGE NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 40,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid College Name",
                        "css": "full-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "full-width"
                    },
                    "zipcode": {
                        "title": "ZIPCODE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    },
                    "city": {
                        "title": "CITY",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid City Name",
                        "css": "half-width"
                    },
                    "state": {
                        "title": "state",
                        "type": "text",
                        "formModel": "TELANGANA",
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid State Name",
                        "css": "half-width"
                    },
                    "country": {
                        "title": "COUNTRY",
                        "type": "text",
                        "formModel": "INDIA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Country Name",
                        "css": "half-width"
                    },
                    "mobile": {
                        "title": "MOBILE NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 10,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "landline": {
                        "title": "LANDLINE NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    }
                }
            }
        }
        scope.selectedRoleObject = { "registrationText": "sometext" }
        scope.openRegistration();
        expect(scope.loginText).toBe('sometext');
        expect(scope.isRegistration).toBe(true);
        expect(scope.registrationFormBuildInfo).toEqual(properties)

    });
    it('testing the openRegistration functionality for employer', function() {
        scope.selectedRole = "employer";
        var properties = {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
                "formInfo": {
                    "firstName": {
                        "title": "FIRST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "lastName": {
                        "title": "LAST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "username": {
                        "title": "USER NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Username",
                        "css": "half-width"
                    },
                    "email": {
                        "title": "EMAIL ID",
                        "type": "email",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have enterd invalid email. Please try again.",
                        "css": "half-width"
                    }
                }
            },
            "personalDetails": {
                "header": "personal Details",
                "isSelected": false,
                "formInfo": {
                    "mobile": {
                        "title": "MOBILE NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 10,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "fax": {
                        "title": "FAX",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "full-width"
                    },
                    "zipcode": {
                        "title": "ZIPCODE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    },
                    "city": {
                        "title": "CITY",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid City Name",
                        "css": "half-width"
                    },
                    "state": {
                        "title": "state",
                        "type": "text",
                        "formModel": "TELANGANA",
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid State Name",
                        "css": "half-width"
                    },
                    "country": {
                        "title": "COUNTRY",
                        "type": "text",
                        "formModel": "INDIA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Country Name",
                        "css": "half-width"
                    }

                }
            },
            "professionalDetails": {
                "header": "Professional Details",
                "isSelected": false,
                "formInfo": {
                    "position": {
                        "title": "POSITION",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "This field must not contain integers",
                        "css": "half-width"
                    },
                    "industry": {
                        "title": "INDUSTRY",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Input",
                        "css": "half-width"
                    },
                    "companyName": {
                        "title": "COMPANY NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid input",
                        "css": "half-width"
                    },
                    "companyWebsite": {
                        "title": "COMPANY WEBSITE",
                        "type": "email",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Website",
                        "css": "half-width"
                    }

                }
            }
        }
        scope.selectedRoleObject = { "registrationText": "sometext" }
        scope.openRegistration();
        expect(scope.loginText).toBe('sometext');
        expect(scope.isRegistration).toBe(true);
        expect(scope.registrationFormBuildInfo).toEqual(properties)
    })
it('testing the openRegistration functionality for employer', function() {
        scope.selectedRole = "student";
        var properties = {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
                "formInfo": {
                    "firstName": {
                        "title": "FIRST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "lastName": {
                        "title": "LAST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "username": {
                        "title": "USER NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid UserName",
                        "css": "half-width"
                    },
                    "email": {
                        "title": "EMAIL ID",
                        "type": "email",
                        "formModel": null,
                        "name":"email",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have enterd invalid email.",
                        "css": "half-width"
                    }
                }
            },
            "StudentDetails": {
                "header": "Student Details",
                "isSelected": false,
                "formInfo": {
                    "ContactNumber": {
                        "title": "CONTACT NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 40,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "DateOfBirth": {
                        "title": "D.O.B",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid DOB",
                        "css": "half-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "full-width"
                    },
                    
                    "zipcode": {
                        "title": "ZIPCODE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be Number",
                        "css": "half-width"
                    },
                    "city": {
                        "title": "CITY",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid City Name",
                        "css": "half-width"
                    },
                    "state": {
                        "title": "state",
                        "type": "text",
                        "formModel": "TELANGANA",
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid State Name",
                        "css": "half-width"
                    },
                    "country": {
                        "title": "COUNTRY",
                        "type": "text",
                        "formModel": "INDIA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Country Name",
                        "css": "half-width"
                    }
                }
            },
             "professionalDetails": {
                "header": "Professional Details",
                "isSelected": false,
                "formInfo": {
                    "CollegeName": {
                        "title": "STUDENT COLLEGE NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be only characters.",
                        "css": "full-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,                      
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "half-width"
                    },
                    "UsernameOrEmail": {
                        "title": "USERNAME OR EMAIL",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": null,
                        "css": "half-width"
                    }
                    
                }
            },
            "professionalDetails": {
                "header": "Professional Details",
                "isSelected": true,
                "formInfo": {
                    "CollegeName": {
                        "title": "STUDENT COLLEGE NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be only characters.",
                        "css": "full-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "half-width"
                    },
                    "UsernameOrEmail": {
                        "title": "USERNAME OR EMAIL",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": null,
                        "css": "half-width"
                    }
                    
                }
            }
        }
        scope.selectedRoleObject = { "registrationText": "sometext" }
        scope.openRegistration();
        expect(scope.loginText).toBe('sometext');
        expect(scope.isRegistration).toBe(true);
        expect(scope.registrationFormBuildInfo).toEqual(properties)
    })
    it('Testing the functionality of resetLoginText function', function() {
        scope.resetLoginText();
        expect(scope.loginText).toBe("LOGIN");
        expect(scope.isRoleSelected && scope.isRegistration).toBe(false);
    });
    it('Testing the functionality of goToSelection function for Input Home', function() {
        var selected = 'Home';
        scope.goToSelection(selected);
        expect(scope.tabs['About Us'].isActive).toBe(false)
        expect(scope.tabs['Contact Us'].isActive).toBe(false)
        expect(scope.tabs['Home'].isActive).toBe(true)
    });
    it('Testing the functionality of goToSelection function for Input About Us', function() {
        var selected = 'About Us';
        scope.goToSelection(selected);
        expect(scope.tabs['About Us'].isActive).toBe(true)
        expect(scope.tabs['Contact Us'].isActive).toBe(false)
        expect(scope.tabs['Home'].isActive).toBe(false)
    });
    it('Testing the functionality of goToSelection function for Input Contact Us', function() {
        var selected = 'Contact Us';
        scope.goToSelection(selected);
        expect(scope.tabs['About Us'].isActive).toBe(false)
        expect(scope.tabs['Contact Us'].isActive).toBe(true)
        expect(scope.tabs['Home'].isActive).toBe(false)
    });



    it('Testing the getFormHeader functionality', function() {
        var formData = {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
            },
            "personalDetails": {
                "header": "personal Details",
                "isSelected": false,
            },
            "professionalDetails": {
                "header": "Professional Details",
                "isSelected": false,
            }
        }
        scope.getFormHeader();
        expect(formData.basicDetails.isSelected).toBe(true);
        expect(formData.personalDetails.isSelected).toBe(false);
        expect(formData.professionalDetails.isSelected).toBe(false);
        expect(formData.basicDetails.header).toBe("Basic Details");
    })

    it('Testing the functionality of navigateRegistration', function() {
        scope.navigateRegistration(false, false);
        expect(scope.tempIndex).toBe(0)
    })
    it('Testing the functionality for isNavigation is true condition', function() {
        scope.currentIndex = 0;
        scope.registrationFormBuildInfo = {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
                "formInfo": {
                    "firstName": {
                        "title": "FIRST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "lastName": {
                        "title": "LAST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "username": {
                        "title": "USER NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid UserName",
                        "css": "half-width"
                    },
                    "email": {
                        "title": "EMAIL ID",
                        "type": "email",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have entered invalid email.",
                        "css": "half-width"
                    }
                }
            },
            "collegeDetails": {
                "header": "College Details",
                "isSelected": false,
                "formInfo": {
                    "collegeName": {
                        "title": "COLLEGE NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 40,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid College Name",
                        "css": "full-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "full-width"
                    },
                    "zipcode": {
                        "title": "ZIPCODE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    },
                    "city": {
                        "title": "CITY",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid City Name",
                        "css": "half-width"
                    },
                    "state": {
                        "title": "state",
                        "type": "text",
                        "formModel": "TELANGANA",
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid State Name",
                        "css": "half-width"
                    },
                    "country": {
                        "title": "COUNTRY",
                        "type": "text",
                        "formModel": "INDIA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Country Name",
                        "css": "half-width"
                    },
                    "mobile": {
                        "title": "MOBILE NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 10,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "landline": {
                        "title": "LANDLINE NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    }
                }
            }
        }
        scope.navigateRegistration(true, true);
        expect(scope.selectedIndex).toBe(1);
        expect(scope.registrationFormBuildInfo.basicDetails.isSelected).toBe(false);
        expect(scope.registrationFormBuildInfo.collegeDetails.isSelected).toBe(true);
    })
    it('Testing the functionality for isNavigation is true condition', function() {
        scope.currentIndex = 1;
        scope.registrationFormBuildInfo = {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
                "formInfo": {
                    "firstName": {
                        "title": "FIRST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "lastName": {
                        "title": "LAST NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "username": {
                        "title": "USER NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid UserName",
                        "css": "half-width"
                    },
                    "email": {
                        "title": "EMAIL ID",
                        "type": "email",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have entered invalid email.",
                        "css": "half-width"
                    }
                }
            },
            "collegeDetails": {
                "header": "College Details",
                "isSelected": false,
                "formInfo": {
                    "collegeName": {
                        "title": "COLLEGE NAME",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 40,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid College Name",
                        "css": "full-width"
                    },
                    "address": {
                        "title": "ADDRESS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9\s,'-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "full-width"
                    },
                    "zipcode": {
                        "title": "ZIPCODE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    },
                    "city": {
                        "title": "CITY",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid City Name",
                        "css": "half-width"
                    },
                    "state": {
                        "title": "state",
                        "type": "text",
                        "formModel": "TELANGANA",
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid State Name",
                        "css": "half-width"
                    },
                    "country": {
                        "title": "COUNTRY",
                        "type": "text",
                        "formModel": "INDIA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z\s]+$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Country Name",
                        "css": "half-width"
                    },
                    "mobile": {
                        "title": "MOBILE NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 10,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "landline": {
                        "title": "LANDLINE NUMBER",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a number",
                        "css": "half-width"
                    }
                }
            }
        }
        scope.navigateRegistration(true, false);
        expect(scope.selectedIndex).toBe(0);
        expect(scope.registrationFormBuildInfo.basicDetails.isSelected).toBe(true);
        expect(scope.registrationFormBuildInfo.collegeDetails.isSelected).toBe(false);
    })

});
