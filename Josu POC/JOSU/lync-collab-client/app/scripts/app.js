'use strict';

/**
 * @ngdoc overview
 * @name lyncSchoolApp
 * @description
 * # lyncSchoolApp
 * Main module of the application.
 */

angular
  .module('lyncSchoolApp', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngStorage',
    'ui.router',
    'ui-rangeSlider'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {
    stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html',
        controller: 'homeController',
        controllerAs: 'home-controller'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html',
        controller: 'loginController',
        controllerAs: 'login-controller'
      })
      .state('loginError', {
        url: '/loginError',
        templateUrl: 'views/login/loginError.html',
        controller: 'loginErrorController',
        controllerAs: 'loginError-controller'
      })
      .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'views/login/forgotPassword.html',
        controller: 'forgotPasswordController',
        controllerAs: 'forgotPassword-controller'
      })
      .state('accountLocked', {
        url: '/accountLocked',
        templateUrl: 'views/login/accountLocked.html',
        controller: 'accountLockedController',
        controllerAs: 'accountLocked-controller'
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'views/login/registration.html',
        controller: 'registrationController',
        controllerAs: 'registration-controller'
      })
      .state('registrationSuccess', {
        url: '/registrationSuccess',
        templateUrl: 'views/login/registrationSuccess.html'
      })
      .state('activation', {
        url: '/activation/:token/',
        templateUrl: 'views/login/activation.html',
        controller: 'activationController',
        controllerAs: 'activation-controller'
      })
      .state('activationSuccess', {
        url: '/activationSuccess',
        templateUrl: 'views/login/activationSuccess.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashboard-controller'
      })
      .state('dashboard.editInformation', {
        url: '/editInformation',
        templateUrl: 'views/dashboard/editInfo.html',
        controller: 'editInfoController.js',
        controllerAs: 'editInfo-controller'
      });
    urlRouterProvider.otherwise(function($injector, $location) {
      var state = $injector.get('$state');
      if($location.path().split('/')[1] === 'activation') {
        state.go('activation', {
          token: $location.path().split('/')[2]
        });
      } else {
        state.go('home');
      }
    });
  }]);