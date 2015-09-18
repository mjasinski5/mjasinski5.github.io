'use strict';

/**
 * @ngdoc service
 * @name hackatonWebangularApp.Helper
 * @description
 * # Helper
 * Service in the hackatonWebangularApp.
 */
angular.module('hackatonWebangularApp')
  .factory('Helper', function () {

    var helperFactory = {};

    var _extractGroups = function(components){

      var groups = [];
      angular.forEach(components, function(el){

        if(el.group_id === null)
         groups.push({name: el.name, id: el.id})
      });
      return groups;
    }

    var _extractData = function(res, value){
        var queryString = {};
        res.replace(
            new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
            function($0, $1, $2, $3) { queryString[$1] = $3; }
        );
        return queryString[value];
      };


    helperFactory.ExtractGroups = _extractGroups;
    helperFactory.ExtractData = _extractData;
    
    return helperFactory;
  });
