'use strict';

angular.module('lyncDigitalApp').constant(
    'setPassword', {
        "properties": {
            "formInfo": {
                "password": {
                    "title": "PASSWORD",
                    "type": "password",
                    "formModel": null,
                    "minLength":8,
                    "maxLength": 15,
                    "required": true,
                    "pattern": null,
                    "validationMessage": "This is required",
                    "patternValidation":"Must contain 8-15 characters"
                },
                "confirmPassword": {
                    "title": "CONFIRM PASSWORD",
                    "type": "password",
                    "formModel": null,
                    "maxLength": 15,
                    "required": true,
                    "pattern": null,
                    "validationMessage": null,
                    "passwordMatchMessage":"Password doesn't match"
                }
            },
            "formImagePath": "images/setPassword.png"
        }
    }
);
