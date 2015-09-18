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
      template: '<li> <button type="button" class="btn btn-{{cssClass}} btn-sm"><span class="{{spanClass}}" aria-hidden="true"> </span></button>  {{ component.name }}</div></br></li>',
      scope: {
        jsonComponent: "@element"
      },
      restrict: 'E',
      link: function postLink(scope) {
        scope.component = JSON.parse(scope.jsonComponent);//element.text('this is the component directive');
        scope.cssClass = scope.component.status === 'up' ? 'success' : 'danger';
        scope.spanClass = scope.component.status === 'up' ? 'glyphicon glyphicon-ok-circle' : 'glyphicon glyphicon-ban-circle';
      }
    };
  });
