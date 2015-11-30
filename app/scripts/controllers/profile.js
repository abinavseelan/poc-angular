'use strict';

/**
 * @ngdoc function
 * @name pocAngularApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the pocAngularApp
 */
angular.module('pocAngularApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
