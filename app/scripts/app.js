'use strict';

/**
 * @ngdoc overview
 * @name hackatonWebangularApp
 * @description
 * # hackatonWebangularApp
 *
 * Main module of the application.
 */
angular
  .module('hackatonWebangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/components', {
        templateUrl: 'views/component.html',
        controller: 'ComponentsCtrl',
        controllerAs: 'component'
      }).
      when('/auth', {
          controller: 'AuthCtrl',
          template: '',
          resolve: {
          token: function(){
            return undefined;
            }
          }
        }
      ).
      when('/:token', {
          controller: 'AuthCtrl',//CreateCtrl,
          template: '',
          resolve: {
          token: function($route){
            return $route.current.params.token;
            }
          }
        }
      )
      .otherwise({
        redirectTo: '/'
      });
  });
