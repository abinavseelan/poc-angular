'use strict';

/**
 * @ngdoc function
 * @name pocAngularApp.controller:NewsfeedCtrl
 * @description
 * # NewsfeedCtrl
 * Controller of the pocAngularApp
 */
angular.module('pocAngularApp')
  .controller('NewsfeedCtrl', function (GetPosts,$scope) {
    $scope.init = function (){
  		$scope.getPosts();
  		console.log($scope.posts);
  	};

  	$scope.getPosts = function() {
  		GetPosts.GetAllPosts()
  		.then(function (result){
  			$scope.posts = result;
  			console.log($scope.posts);
  		}, function (error){

  		});
  	};
  	
  	$scope.init();
  });
