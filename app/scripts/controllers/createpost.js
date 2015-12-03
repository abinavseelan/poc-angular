'use strict';

/**
 * @ngdoc function
 * @name pocAngularApp.controller:CreatepostCtrl
 * @description
 * # CreatepostCtrl
 * Controller of the pocAngularApp
 */
angular.module('pocAngularApp')
  .controller('CreatepostCtrl', function ($scope,Embedly,$http,$rootScope,$location) {

      //Instatiating an object to add to the db on post creation
   	$scope.created_post = {
   		"creator" : "Abinav Seelan",
   		"desc" : "",
         "question": "",
   		"embedded_content": {},
   	};

   	

   	$scope.create = function(){

         //Call the getData function in embedly.js
   		Embedly.getData($scope.url)
   		.then(function (result){
            //If the promise is resolved, add the returned resolved value to embedded_content
   			$scope.created_post.embedded_content = result;
            //Send a POST request to the server with the final created post as data
   			$http({
   				method: 'POST',
   				url: $rootScope.postsEndPoint,
   				data: $scope.created_post
   			}).then(function onSuccess(response){
   				console.log(response);
               //Redirect to the home page on succeeding
   				$location.path('/');
   			}, function onError(response){
   				console.log(response);
   			})
   		});	
   	}

  });
