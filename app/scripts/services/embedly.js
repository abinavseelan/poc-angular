'use strict';

/**
 * @ngdoc service
 * @name pocAngularApp.Embedly
 * @description
 * # Embedly
 * Factory in the pocAngularApp.
 */
angular.module('pocAngularApp')
  .factory('Embedly', function ($http,$q) {
    // Service logic
    // ...
    var api_key = "041a06144b934ae5800557263be96f9a";
    var q = $q.defer();
    return {
      getData: function(url_input){
        $http({
          method: 'GET',
          url: "http://api.embed.ly/1/oembed",
          params: {
            key: api_key,
            url: url_input,
            maxwidth: 200,
            luxe: 1,
            chars: 150
          }
        }).then(function onSuccess(response){
          //console.log(response.data);
          q.resolve(response.data);
        }, function onError(response){
          q.reject(response);
        })
        return q.promise;
      } 
    }
  });
