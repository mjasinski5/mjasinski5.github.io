'use strict';

/**
 * @ngdoc function
 * @name hackatonWebangularApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the hackatonWebangularApp
 */
angular.module('hackatonWebangularApp')
  .controller('AuthCtrl', function ($scope, LsCacheFactory, $window, config, token, Helper, $location) {

    $scope.errorMessage = '';
    console.log('sdfsdf');
    $scope.saveAuth = function(){
        var token_internal = Helper.ExtractData(!token ? LsCacheFactory.GetToken() : token, 'access_token');
      //  var scopes = Helper.extractData(token, 'scopes');

        LsCacheFactory.SetToken(token_internal);
      //  LsCacheFactory.SetScopes(scopes);

        // AuthFactory.GetAuthor().then(function(author){
        //     LsCacheFactory.SetAuthor(author, 59);
        //     RedirectFactory.RedirectToManage();
        // }, function(){
        //     //add error case, rest call failed
        // })

        // AccountFactory.GetUsersOfRole('Publisher').then(function(response){
        //     LsCacheFactory.SetPublisherUsers(helperService.ExtractUsersFromResponse(response));
        // })
        $location.path('/components');

    }

    $scope.CheckAuthorize = function(){
        if(token) {
            $scope.authorized = true;
            $scope.saveAuth();
        }
        else if(LsCacheFactory.GetToken())
        {
            alert('you are logged in:)');
            $location.path('/components');
        } else  {

            $scope.authorized = false;
            $window.location.replace(config.oauthService() + config.oauthEndpoint() + "?response_type=token&client_id=" + config.clientId() + "&scope=hybris.wookiees_view&redirect_uri=" + config.redirect_uri());
        }
    }

    $scope.CheckAuthorize();


  });
