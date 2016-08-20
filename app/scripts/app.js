'use strict';

/**
 * @ngdoc overview
 * @name teamBuildingApp
 * @description
 * # teamBuildingApp
 *
 * Main module of the application.
 */
angular
  .module('teamBuildingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamsController',
        controllerAs: 'teams'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      .otherwise({
    	  redirectTo: '/'
      });
  });
  

