'use strict';

/**
 * @ngdoc overview
 * @name pocAngularApp
 * @description
 * # pocAngularApp
 *
 * Main module of the application.
 */
angular
  .module('pocAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/newsfeed.html',
        controller: 'NewsfeedCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create_post.html',
        controller: 'CreatepostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope){
    //Using the rootScope to save the endpoints. 
    $rootScope.postsEndPoint = "https://poc-inquizit-api.herokuapp.com/api1/posts";
    $rootScope.usersEndPoint = "https://poc-inquizit-api.herokuapp.com/api1/users"; 
  }); 
