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

    // The Embed.ly API key
    var api_key = "041a06144b934ae5800557263be96f9a";

    //Creating a promise object
    var q = $q.defer();
    return {
      getData: function(url_input){
        $http({
          method: 'GET',
          url: "https://api.embed.ly/1/oembed",
          params: {
            /*
              key: API Key for Embely [Required]
              url: The URL that needs to be embedded [Required]
              maxwidth: The width of the thumbnail image [Optional]
              luxe: Prevents Autoplay [Optional]
              chars: The number of characters for the description [Optional]
            */
            key: api_key,
            url: url_input,
            maxwidth: 200,
            luxe: 1,
            chars: 150
          }
        }).then(function onSuccess(response){
          //console.log(response.data);
          //If the call succeeds, resolve the promise
          q.resolve(response.data);
        }, function onError(response){
          //If the call fails, reject the promise
          q.reject(response);
        })

        //Return the promise object.
        return q.promise;
      } 
    }
  });
