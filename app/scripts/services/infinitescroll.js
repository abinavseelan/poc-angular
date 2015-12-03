'use strict';

/**
 * @ngdoc service
 * @name pocAngularApp.InfiniteScroll
 * @description
 * # InfiniteScroll
 * Factory in the pocAngularApp.
 */
angular.module('pocAngularApp')
  .factory('InfiniteScroll', function ($http,$rootScope) {

    //Instantiate an Object
    var InfiniteScroll = function() {
      this.posts = [];
      this.busy = false;
      this.postsDone = 0;
    };

    //Function Prototype. Function is called in newsfeed.js

    InfiniteScroll.prototype.nextPage = function() {
      if (this.busy) return;
      //The busy value is to display "loading data" when the data is being loaded
      this.busy = true;
      $http({
        method: 'GET',
        url: $rootScope.postsEndPoint,
        params: {
          //The skip param will specify where to start loading posts from, from the collection.
          //The limit param specifies how many post are pulled at once from the db
          skip: this.postsDone,
          limit: 10
        }
      }).then(function success(response) {
        var posts = response.data;
        for (var i = 0; i < posts.length; i++) {
          console.log(posts[i]);
          //push the posts into the object array to be returned
          this.posts.push(posts[i]);
        }
        this.postsDone+=posts.length;
        this.busy = false;
      }.bind(this));
    };

    return InfiniteScroll;
  });
