'use strict';

/**
 * @ngdoc function
 * @name pocAngularApp.controller:NewsfeedCtrl
 * @description
 * # NewsfeedCtrl
 * Controller of the pocAngularApp
 */
angular.module('pocAngularApp')
  .controller('NewsfeedCtrl', function (InfiniteScroll,$scope) {
    $scope.InfiniteScroll = new InfiniteScroll();
  });
