'use strict';

/**
 * @ngdoc service
 * @name pocAngularApp.InfiniteScroll
 * @description
 * # InfiniteScroll
 * Factory in the pocAngularApp.
 */
angular.module('pocAngularApp')
  .factory('InfiniteScroll', function ($http) {
    var InfiniteScroll = function() {
      this.posts = [];
      this.busy = false;
      this.postsDone = 0;
    };


    InfiniteScroll.prototype.nextPage = function() {
      if (this.busy) return;
      this.busy = true;
      $http({
        method: 'GET',
        url: "http://localhost:7891/api1/posts",
        params: {
          skip: this.postsDone,
          limit: 10
        }
      }).then(function success(response) {
        var posts = response.data;
        for (var i = 0; i < posts.length; i++) {
          console.log(posts[i]);
          this.posts.push(posts[i]);
        }
        this.postsDone+=posts.length;
        this.busy = false;
      }.bind(this));
    };

    return InfiniteScroll;
  });
