'use strict';

angular.module('lyncDigitalApp').constant('headerInfo', {
    "beforeLogin": {
        "headerContent": {
            "logo": "images/logo.png",
            "tabs": [{
                "name": "HOME",
                "isActive": true,
                "state": "home"
            }, {
                "name": "ABOUT US",
                "isActive": false,
                "state": "aboutUs"
            }, {
                "name": "CONTACT US",
                "isActive": false,
                "state": "contactUs"
            }],
            "signin": "SIGN IN"
        }
    },
    "afterLogin": {
        "headerContent": {
            "logo": "images/logo.png",
            "tabs": [{
                "name": "HOME",
                "isActive": true,
                "state": "home"
            }, {
                "name": "ABOUT US",
                "isActive": false,
                "state": "aboutUs"
            }, {
                "name": "CONTACT US",
                "isActive": false,
                "state": "contactUs"
            }],
            "logout": "LOGOUT"
        }
    }
});