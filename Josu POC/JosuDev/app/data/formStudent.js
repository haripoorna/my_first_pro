'use strict';

angular.module('lyncDigitalApp').constant(
    'formStudent', {
        "properties": {
            "basicDetails": {
                "header": "Student Registration",
                "isSelected": true,
                "formInfo": {
                    "firstName": {
                        "title": "First Name",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "lastName": {
                        "title": "Last Name",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "userName": {
                        "isNotEditMode" : true,
                        "title": "User Name",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 20,
                        "required": true,
                        "pattern": "^[a-zA-Z0-9]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid UserName",
                        "css": "full-width"
                    },
                    "primaryEmail": {
                        "isNotEditMode" : true,
                        "title": "Email Id",
                        "type": "email",
                        "formModel": null,
                        "name": "email",
                        "maxLength": 50,
                        "required": true,
                        "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have enterd invalid email.",
                        "css": "full-width"
                    }
                }
            },
            "StudentDetails": {
                "header": "Student Details",
                "isSelected": false,
                "formInfo": {
                    "mobile": {
                        "title": "Contact Number",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 15,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "dob": {
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
                        "title": "Address",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Address",
                        "css": "full-width"
                    },
                    "zipcode": {
                        "title": "Zipcode",
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
                        "title": "City",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid City Name",
                        "css": "half-width"
                    },
                    "state": {
                        "title": "State",
                        "type": "text",
                        "formModel": "TELANGANA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid State Name",
                        "css": "half-width"
                    },
                    "country": {
                        "title": "Country",
                        "type": "text",
                        "formModel": "INDIA",
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Country Name",
                        "css": "half-width"
                    }
                }
            },
            "professionalDetails": {
                "header": "Academic Details",
                "isSelected": false,
                "formInfo": {
                    "branch": {
                        "isNotEditMode" : true,
                        "title": "Branch",
                        "type": "select",
                        "formModel": null,
                        "maxLength": 50,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": null,
                        "css": "half-width"
                    },
                    "passoutYear": {
                        "isNotEditMode" : true,
                        "title": "Year of Passout",
                        "type": "select",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "This need to be number",
                        "css": "half-width"
                    },
                    "collegeName": {
                        "isNotEditMode" : true,
                        "title": "College Name",
                        "type": "select",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be only characters.",
                        "css": "full-width"
                    }
                }
            }

        }
    }
);
