'use strict';

/**
 * @ngdoc service
 * @name hackatonWebangularApp.RestAngularService
 * @description
 * # RestAngularService
 * Service in the hackatonWebangularApp.
 */
angular.module('hackatonWebangularApp')
  .factory('RestAngularService', function (Restangular, localStorageService) {
    var restAngularService = {};

    var _componentPrivate = function () {
        return Restangular.withConfig(function(RestangularConfigurer) {

            var token = localStorageService.get('apiKey');
            RestangularConfigurer.setDefaultHeaders({ Authorization: 'Bearer '+ token });
            RestangularConfigurer.setBaseUrl('https://api.yaas.io/hybris/hackaton-compon/v1/statuspage');
            //RestangularConfigurer.setBaseUrl('http://localhost:3000');

            return RestangularConfigurer;
        });
    }

    var _componentAll = function () {
        return Restangular.withConfig(function(RestangularConfigurer) {

            RestangularConfigurer.setBaseUrl('https://api.yaas.io/hybris/hackaton-compon/v1/statuspage');
            //RestangularConfigurer.setBaseUrl('http://localhost:3000');

            return RestangularConfigurer;
        });
    }

    restAngularService.ComponentAll = _componentAll;
    restAngularService.ComponentPrivate = _componentPrivate

    return restAngularService;

  });
