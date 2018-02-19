'use strict';

angular.module('productDevApp').constant(
    'formStudent', {
        "properties": {
            "firstName": {
                "title": "First Name",
                "type": "text",
                "formModel": null,
                "name": "firstName",
                "maxLength": 10,
                "required": true,
                "pattern": "^[a-zA-Z\s]+$",
                "validationMessage": "This is required"
            },
            "lastName": {
                "title": "Last Name",
                "type": "text",
                "formModel": null,
                "name":"lastName",
                "maxLength": 10,
                "required": true,
                "pattern": "^[a-zA-Z\s]+$",
                "validationMessage": "This is required"
            },
            "email": {
                "title": "e-mail",
                "type": "email",
                "formModel": null,
                "maxLength": 20,
                "required": true,
                "pattern": "^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$",
                "validationMessage":"This is required",
                "validationMessage2": "Invalid e-mail"
            },
            "mobile": {
                "title": "Mobile",
                "type": "text",
                "formModel": null,
                "maxLength": 10,
                "required": true,
                "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                "validationMessage": "Need to be a number"
            },
            "gender": {
                "title": "Gender",
                "type": "radio",
                "formModel": null,
                "values": ["Male", "Female"],
                "required": true
            },
            "terms": {
                "title": "I agree to the terms and conditions.",
                "type": "checkbox",
                "name":"check",
                 "formModel": null,
                "isTerms": false,
                "required": true,
                "validationMessage": " You must accept the terms of service before you can proceed."
            },
            "signUp": {
               "signUp": "Sign Up"
            }
        }
    }
);
