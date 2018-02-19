'use strict';

angular.module('lyncSchoolApp').constant(
    'formEmployer', {
        "properties": {
            "basicDetails": {
                "header": "Basic Details",
                "isSelected": true,
                "formInfo": {
                    "FirstName": {
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
                    "LastName": {
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
                    "UserName": {
                        "isBlur": true,
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
                    "PrimaryEmail": {
                        "isBlur": true,
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
                    "Mobile": {
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
                    "Fax": {
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
                    "Address": {
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
                    "Zipcode": {
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
                    "City": {
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
                    "State": {
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
                    "Country": {
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
                    "Position": {
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
                    "Industry": {
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
                    "CompanyName": {
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
                    "CompanyWebsite": {
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
    }
);
