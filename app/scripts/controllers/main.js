'use strict';

/**
 * @ngdoc function
 * @name pocAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocAngularApp
 */
angular.module('pocAngularApp')
  .controller('MainCtrl',function ($scope,$http,$rootScope) {

  	$scope.users = {};

  	//Search for users
  	$scope.getUsers = function(val) {
	    return $http({
	    	method: "GET",
	    	url: $rootScope.usersEndPoint,
	    	params: {
	    		name: val
	    	}
	    }).then(function onSuccess(response){
	    	//Scan through all the return values and return each users first_name
	    	return response.data.map(function(item){
	        	return item.first_name;
	      	});
	    }, function onError(response){
	    	console.log(response);
	    });
  	};
  });
