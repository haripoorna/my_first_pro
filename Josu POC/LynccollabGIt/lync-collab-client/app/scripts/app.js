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
  .config(['$stateProvider', '$urlRouterProvider' , function (stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise('home');
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
        templateUrl: 'views/login/registrationSuccess.html',
      })
      .state('activation', {
        url: '/activation/:token/',
        templateUrl: 'views/login/activation.html',
        controller: 'activationController',
        controllerAs: 'activation-controller'
      })
      .state('activationSuccess', {
        url: '/activationSuccess',
        templateUrl: 'views/login/activationSuccess.html',
      })
      .state('studentDashboard', {
        url: '/studentDashboard',
        templateUrl: 'views/student/studentDashboard.html',
        controller: 'studentDashboardController',
        controllerAs: 'studentDashboard-controller'
      })
      .state('studentDashboard.editInformation', {
        url: '/editInformation',
        templateUrl: 'views/student/editStudentInfo.html',
        controller: 'editStudentInfoController.js',
        controllerAs: 'editStudentInfo-controller'
      })
      .state('employerDashboard', {
        url: '/employerDashboard',
        templateUrl: 'views/employer/employerDashboard.html',
        controller: 'employerDashboardController',
        controllerAs: 'employerDashboard-controller'
      })
      .state('employerDashboard.editInformation', {
        url: '/editInformation',
        templateUrl: 'views/student/editEmployerInfo.html',
        controller: 'editEmployerInfoController.js',
        controllerAs: 'editEmployerInfo-controller'
      })
      .state('collegeDashboard', {
        url: '/collegeDashboard',
        templateUrl: 'views/college/collegeDashboard.html',
        controller: 'collegeDashboardController',
        controllerAs: 'collegeDashboard-controller'
      })
      .state('collegeDashboard.editInformation', {
        url: '/editInformation',
        templateUrl: 'views/student/editCollegeInfo.html',
        controller: 'editCollegeInfoController.js',
        controllerAs: 'editCollegeInfo-controller'
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
