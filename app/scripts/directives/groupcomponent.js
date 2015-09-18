'use strict';

/**
 * @ngdoc directive
 * @name hackatonWebangularApp.directive:groupComponent
 * @description
 * # groupComponent
 */
angular.module('hackatonWebangularApp')
  .directive('groupComponent', function () {
    return {
      template: '<ul>{{group.name}} : </br> <div ng-repeat="comp in components"><component element= "{{comp}}"> </component></br></div></ul>',
      scope: {
        jsonComponents: "@components",
        jsonGroup: "@group"
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var componentArr = [];
        scope.group = JSON.parse(scope.jsonGroup);
        angular.forEach(JSON.parse(scope.jsonComponents), function(el){
            if(el.group_id === scope.group.id)
              componentArr.push(el);
        });

        scope.components = componentArr;

      }
    };
  });
