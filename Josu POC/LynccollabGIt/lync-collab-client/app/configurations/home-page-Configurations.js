'use strict';

angular.module('lyncSchoolApp').constant(
    'homePageConfig', {
        "headerProperties": {
            "tabs": {
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
        },
        "loginProperties": {
            "details": {
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
            },
            "loginFormInfo": {
                "userName": {
                    "title": "Username or Email",
                    "type": "text",
                    "formModel": null,
                    "maxLength": 20,
                    "required": true,
                    "pattern": null,
                    "validationMessage": null
                },
                "password": {
                    "title": "Password",
                    "type": "password",
                    "formModel": null,
                    "maxLength": 20,
                    "required": true,
                    "pattern": null,
                    "validationMessage": null
                }
            }
        }
    }
);
