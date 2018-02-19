'use strict';

angular.module('lyncDigitalApp').constant(
    'formLogin', {
        "loginHeaderInfo": {
            "heading": "Welcome Back!",
            "paragraph": "Please login to your account to access the full version"
        },
        "loginFormInfo": {
            "userName": {
                "title": "Username or Email",
                "type": "text",
                "formModel": null,
                "maxLength": 50,
                "required": true,
                "pattern": null,
                "validationMessage": "This is required"
            },
            "password": {
                "title": "Password",
                "type": "password",
                "formModel": null,
                "maxLength": 30,
                "required": true,
                "pattern": null,
                "validationMessage": "This is required"
            }
        },
        "userImages": {
            "loginImage": "images/josuSignIn.png",
            "forgotPassword": "images/forgotPassword.png"
        },
        "forgotPassword": {
            "link": "Forgot your password? Get help signing in.",
            "properties": {
                "heading": "Forgot Password?",
                "paragraph": "No problem! Enter your email with instruction to reset your password has been sent to your email id.",
                "formInfo": {
                    "primaryEmail": {
                        "title": "EMAIL ID",
                        "type": "email",
                        "formModel": null,
                        "maxLength": 30,
                        "required": true,
                        "pattern": null,
                        "validationMessage": "This is required"
                    }
                }
            }
        }
    }
);
