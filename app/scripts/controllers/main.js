'use strict';

/**
 * @ngdoc function
 * @name pocAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pocAngularApp
 */
angular.module('pocAngularApp')
  .controller('MainCtrl',function ($scope,$http) {

  	$scope.users = {};

  	$scope.getUsers = function(val) {
	    return $http({
	    	method: "GET",
	    	url: "http://localhost:7891/api1/users",
	    	params: {
	    		name: val
	    	}
	    }).then(function onSuccess(response){
	    	return response.data.map(function(item){
	        	return item.first_name;
	      	});
	    }, function onError(response){
	    	console.log(response);
	    });
  	};
  });
