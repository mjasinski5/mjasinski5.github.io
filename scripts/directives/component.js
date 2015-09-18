'use strict';

/**
 * @ngdoc directive
 * @name hackatonWebangularApp.directive:component
 * @description
 * # component
 */
angular.module('hackatonWebangularApp')
  .directive('component', function () {
    return {
      //template: '<li> <button type="button" class="btn btn-{{cssClass}} btn-sm"><span class="{{spanClass}}" aria-hidden="true"> </span></button>  {{ component.name }}</div></br></li>',
      templateUrl: '../views/singlecomponentdirective.html',
      scope: {
        jsonComponent: "@element"
      },
      restrict: 'E',
      link: function postLink(scope) {
        scope.component = JSON.parse(scope.jsonComponent);//element.text('this is the component directive');
        scope.up = scope.component.status === 'up' ? true : false;
      }
    };
  });
