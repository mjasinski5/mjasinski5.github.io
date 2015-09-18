'use strict';

/**
 * @ngdoc function
 * @name hackatonWebangularApp.controller:ComponentsCtrl
 * @description
 * # ComponentsCtrl
 * Controller of the hackatonWebangularApp
 */
angular.module('hackatonWebangularApp')
  .controller('ComponentsCtrl', function ($scope, Component, $interval, Helper) {

    $scope.components = [];
    var updateInterval = 50000;

    var GetComponents = function(){
        Component.GetCurrentComponentsRest().then(function(res){
          $scope.components = res;
          console.log($scope.components);
          $scope.groups = Helper.ExtractGroups($scope.components);
          console.log('groups');
          console.log($scope.groups);
        }, function(){
          console.log('error przy pobraniu componentow');
        })

    }

    GetComponents();
    $interval(function(){ GetComponents(); console.log('Components updated!') }, updateInterval)


  });
