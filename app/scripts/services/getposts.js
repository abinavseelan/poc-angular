'use strict';

/**
 * @ngdoc service
 * @name pocAngularApp.GetPosts
 * @description
 * # GetPosts
 * Service in the pocAngularApp.
 */
angular.module('pocAngularApp')
  .service('GetPosts', function ($q,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var GetPosts = this;
    GetPosts.posts = {};

    GetPosts.GetAllPosts = function(){
    	var defer = $q.defer();
    	$http({
    		method: 'GET',
    		url: 'http://localhost:7891/api1/posts'
    	})
    	.then(function onSuccess(response){
    		GetPosts.posts = response.data;
    		console.log(GetPosts.posts);
    		defer.resolve(response.data);
    	}, function onError(response){
    		defer.reject(response);
    	});

    	return defer.promise;
    };

    return GetPosts;
  });
