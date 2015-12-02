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

   	$scope.created_post = {
   		"creator" : "Abinav Seelan",
   		"desc" : "",
   		"embedded_content": {},
   	};

   	

   	$scope.create = function(){
   		Embedly.getData($scope.url)
   		.then(function (result){
   			$scope.created_post.embedded_content = result;
   			$http({
   				method: 'POST',
   				url: $rootScope.postsEndPoint,
   				data: $scope.created_post
   			}).then(function onSuccess(response){
   				console.log(response);
   				$location.path('/');
   			}, function onError(response){
   				console.log(response);
   			})
   		});	
   	}

  });
