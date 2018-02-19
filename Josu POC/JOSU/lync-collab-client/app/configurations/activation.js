'use strict';

angular.module('lyncSchoolApp').constant(
    'activation', {
        "properties": {
            "formInfo": {
                "password": {
                    "title": "PASSWORD",
                    "type": "password",
                    "formModel": null,
                    "maxLength": 30,
                    "required": true,
                    "pattern": null,
                    "validationMessage": null
                },
                "confirmPassword": {
                    "title": "CONFIRM PASSWORD",
                    "type": "password",
                    "formModel": null,
                    "maxLength": 30,
                    "required": true,
                    "pattern": null,
                    "validationMessage": null
                }
            },
            "formImagePath": "images/employer.svg"
        }
    }
);
