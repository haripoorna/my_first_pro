'use strict';

angular.module('lyncDigitalApp').constant(
    'registrationInfo', {
        "signUpInfo": {
            "signUpHeaderInfo": {
                "heading": "Welcome Back!",
                "paragraph": "Please register to access the full version"
            },
            "details": {
                "EMPLOYER": {
                    "image": "images/employer.png",
                    "registrationText": "EMPLOYER REGISTRATION"
                },
                "STUDENT": {
                    "image": "images/student.png",
                    "registrationText": "STUDENT REGISTRATION"
                },
                "COLLEGE": {
                    "image": "images/college.png",
                    "registrationText": "COLLEGE REGISTRATION"
                }
            },
            "signUpSuccessInfo":{
                "heading" : "Congratulations",
                "message" : "Registered successfully, please check your mail for activation link and set password ..!",
                "image"   : "images/successMessage.png"
             }
        }

    }
);
