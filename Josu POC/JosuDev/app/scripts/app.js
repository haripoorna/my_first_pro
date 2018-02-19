'use strict';

/**
 * @ngdoc overview
 * @name lyncDigitalApp
 * @description
 * # lyncDigitalApp
 * Main module of the application.
 **/

angular.module('lyncDigitalApp', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngStorage',
    'ui.router',
    'ui-rangeSlider',
    'ui.bootstrap',
    'ngFileUpload',
    'ngImgCrop'
]).config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {
    stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home/home.html',
            controller: 'homeController',
            controllerAs: 'home-controller'
        })
        .state('setPassword', {
            url: '/setPassword/:token/',
            templateUrl: 'views/login/setPassword.html',
            controller: 'setPasswordController',
            controllerAs: 'setPassword-controller'
        })
        .state('resetPassword', {
            url: '/resetPassword/:token/',
            templateUrl: 'views/login/resetPassword.html',
            controller: 'setPasswordController',
            controllerAs: 'setPassword-controller'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard/dashboard.html',
            controller: 'dashboardController',
            controllerAs: 'dashboard-controller'
        });
    urlRouterProvider.otherwise(function($injector, $location) {
        var state = $injector.get('$state');
        if ($location.path().split('/')[1] === 'setPassword') {
            state.go('setPassword', {
                token: $location.path().split('/')[2]
            });
        } else if ($location.path().split('/')[1] === 'resetPassword') {
            state.go('resetPassword', {
                token: $location.path().split('/')[2]
            });
        } else {
            state.go('home');
        }
    });
}]);
