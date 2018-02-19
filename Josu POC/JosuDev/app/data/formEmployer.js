'use strict';

angular.module('lyncDigitalApp').constant(
    'formEmployer', {
        "properties": {
            "basicDetails": {
                "header": "Employer Registration",
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
                        "patternValidation": "Invalid Username",
                        "css": "full-width"
                    },
                    "primaryEmail": {
                        "isNotEditMode" : true,
                        "title": "Email Id",
                        "type": "email",
                        "formModel": null,
                        "maxLength": 50,
                        "required": true,
                        "pattern": "^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$",
                        "validationMessage": "This is required",
                        "patternValidation": "You have entered invalid email.",
                        "css": "full-width"
                    }
                }
            },
            "personalDetails": {
                "header": "Personal Details",
                "isSelected": false,
                "formInfo": {
                    "mobile": {
                        "title": "Mobile Number",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 15,
                        "required": true,
                        "pattern": "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$",
                        "validationMessage": "This is required",
                        "patternValidation": "Need to be a 10 digit number",
                        "css": "half-width"
                    },
                    "fax": {
                        "title": "Fax",
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
                        "patternValidation": "Need to be a number",
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
                "header": "Professional Details",
                "isSelected": false,
                "formInfo": {
                    "position": {
                        "title": "Position",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "This field must not contain integers",
                        "css": "half-width"
                    },
                    "industry": {
                        "isNotEditMode" : true,
                        "title": "Industry",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Input",
                        "css": "half-width"
                    },
                    "companyName": {
                        "isNotEditMode" : true,
                        "title": "Company Name",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": "^[a-zA-Z_ ]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid input",
                        "css": "full-width"
                    },
                    "companyWebsite": {
                        "title": "Company Website",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": "^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$",
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Website",
                        "css": "full-width"
                    }
                }
            }
        }
    }
);
