'use strict';

angular.module('lyncDigitalApp').constant(
    'addJob', {
        "properties": {
            "jobDetails": {
                "jobtype" : ["Immediate", "Pipeline"],
                "formInfo": {
                    "jobTitle": {
                        "title": "Job Title",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 50,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "full-width"
                    },
                    "jobType": {
                        "title": "Job Type",
                        "type": "select",
                        "formModel": null,
                        "maxLength": 50,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": null,
                        "css": "full-width"
                    },
                    "skills": {
                        "title": "Required Skills",
                        "type": "text",
                        "formModel": null,
                        "maxLength": 100,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required",
                        "patternValidation": "Invalid Name",
                        "css": "full-width"
                    },
                    "jobDesc": {
                        "title": "Job Description",
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
