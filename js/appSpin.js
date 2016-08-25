angular.module('appSpin', ['ngRoute', 'ngMaterial', 'youtube-embed'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      'use strict';
      $routeProvider
        .when('/home', {
          templateUrl: 'pages/home.html',
          controller: 'homeController',
          controllerAs: 'home'
        })
        .when('/player', {
          templateUrl: 'pages/player.html',
          controller: 'playerController',
          controllerAs: 'player'
        })
        .otherwise({
          redirectTo: '/home'
        });
      //$locationProvider.html5Mode(true);
    }])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
  })
  .controller('appSpinController', ['$scope', '$http', '$route', '$routeParams', '$location',
    function($scope, $http, $route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;

      $scope.appName = "Spin";
      $scope.spinFooter = "Made by gangoffork.";
      $scope.menu = [{name: "Spin", uri: "#home"},{name: "Player", uri: "#player"}];
      $scope.currentNavItem = 'home';
  }])
  .controller('playerController', ['$scope','$routeParams', function($scope, $routeParams, $ngSrc) {
    this.queue = [];
    this.currentMusic = {};
    this.musicName = "";
    $scope.currentVideo  = "";

    $scope.playerVars = {
        autoplay: 1
    };

    var verifyYoutubeUrl = function(uri) {
      var error = -1;
      var tag = "?v=";
      var index = uri.indexOf(tag);
      if (index !== error) {
        return uri.slice(index+tag.length);
      } else {
        return uri;
      }
      return uri;
    };

    this.add = function() {

      this.currentMusic = {name: this.musicName, uri: this.musicUri};
      this.queue.push(this.currentMusic);
      $scope.currentVideo = verifyYoutubeUrl(this.currentMusic.uri);
    };

    this.remove = function(item) {
      var index;
      var numToRemove = 1;
      index = this.queue.indexOf(item);
      this.queue.splice(index, numToRemove);
    };

    this.play = function(item) {
      $scope.currentVideo = verifyYoutubeUrl(item.uri);
    };

    $scope.$on('youtube.player.ended', function ($event, player) {
      if (player === $scope.looper.player) {
          player.playVideo();
      }
    });

  }])
  .controller('homeController', ['$routeParams', function() {
    // not yet implemented.
  }])
  .directive('spinHeader', function() {
    return {
      templateUrl: 'template/spin-header.html'
    };
  })
  .directive('spinFooter', function() {
    return {
      templateUrl: 'template/spin-footer.html'
    };
  })
  .directive('spinMenu', function() {
    return {
      templateUrl: 'template/spin-menu.html'
    };
  });
