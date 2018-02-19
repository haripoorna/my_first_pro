'use strict';

angular.module('lyncDigitalApp').constant(
    'filterOptions', {
        "student": {
            "branches": {
                "ECE": {
                    "type": "ECE",
                    "isChecked": false
                },
                "CSE": {
                    "type": "CSE",
                    "isChecked": false
                },
                "EEE": {
                    "type": "EEE",
                    "isChecked": false
                },
                "MECH": {
                    "type": "MECH",
                    "isChecked": false
                },
                "IT": {
                    "type": "IT",
                    "isChecked": false
                },
                "AeroSpace": {
                    "type": "AeroSpace",
                    "isChecked": false
                }
            },
            "startingYear": "2010"
        }
    }
);
