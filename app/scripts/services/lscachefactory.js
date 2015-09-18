'use strict';

/**
 * @ngdoc service
 * @name hackatonWebangularApp.LsCacheFactory
 * @description
 * # LsCacheFactory
 * Service in the hackatonWebangularApp.
 */
angular.module('hackatonWebangularApp')
  .service('LsCacheFactory', function (localStorageService) {

    var lsCacheFactory = {};

    var _setToken = function(value){
        localStorageService.set('apiKey', value);
    }

    var _getToken = function(){
        return localStorageService.get('apiKey');
    }

    lsCacheFactory.SetToken = _setToken;
    lsCacheFactory.GetToken = _getToken;

    return lsCacheFactory;

  });
