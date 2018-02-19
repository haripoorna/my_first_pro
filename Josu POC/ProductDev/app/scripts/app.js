'use strict';

/**
 * @ngdoc overview
 * @name productDevApp
 * @description
 * # productDevApp
 *
 * Main module of the application.
 */
angular
    .module('productDevApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngMaterial',
        'ui-rangeSlider',
        'ui.router',
        'ngSanitize'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {
        urlRouterProvider.otherwise('home');
        stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home/home.html',
                controller: 'tableController',
                controllerAs: 'tableController'
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'views/registration/registration.html',
                controller: 'registrationController',
                controllerAs: 'registration-Controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login/login.html',
                controller: 'loginController',
                controllerAs: 'login-Controller'
            })

    }]);
