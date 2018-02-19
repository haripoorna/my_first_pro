'use strict';

angular.module('lyncSchoolApp').constant(
    'addJob', {
        "properties": {
            "jobDetails": {
                "formInfo": {
                    "jobTitle": {
                        "title": "JOB TITLE",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "skills": {
                        "title": "REQUIRED SKILLS",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "half-width"
                    },
                    "jobDesc": {
                        "title": "JOB DESCRIPTION",
                        "type": "textarea",
                        "formModel": null,
                        "maxLength": 300,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "css": "full-width"
                    }
                }
            }
        }
    }
);
