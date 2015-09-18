'use strict';

/**
 * @ngdoc service
 * @name hackatonWebangularApp.config
 * @description
 * # config
 * Service in the hackatonWebangularApp.
 */
angular.module('hackatonWebangularApp')
  .factory('config', function () {

    var config = {};

    config.oauthService = function() { return "https://api.yaas.io/hybris/oauth2/b1" };
    config.oauthEndpoint = function() { return '/authorize' };
    config.clientId = function() { return "35yJFUKpTKe0iMLuUWXS6i3aBGNn3NYX" };
    //config.redirect_uri = function() { return "http://mariusz.jasinski.github.io/#/components" };
    config.redirect_uri = function() { return "http://127.0.0.1:9000/" };

    return config;
  });
