'use strict';

angular.module('lyncSchoolApp').constant(
    'activation', {
        "properties": {
            "formInfo": {
                "Password": {
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
    }
);
