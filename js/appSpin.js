'use strict';
angular.module('appSpin', ['ngRoute', 'ngMaterial'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
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
        .when('/login', {
          templateUrl: 'pages/login.html',
          controller: 'loginController',
          controllerAs: 'login'
        })
        .otherwise({
          redirectTo: '/home'
        });
      //$locationProvider.html5Mode(true);
    }])
  .controller('appSpinController', ['$scope', '$http', '$route', '$routeParams', '$location',
    function($scope, $http, $route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;

      $scope.appName = "Spin";
      $scope.spinFooter = "Made by gangoffork.";
      $scope.menu = [{name: "Player", uri: "#player"},{name: "Login", uri: "#login"}];
      $scope.currentNavItem = 'home';
  }])
  .controller('playerController', ['$scope','$routeParams', function($routeParams, $ngSrc) {
    // not yet implemented.
    this.queue = [];
    this.currentMusic = {};
    this.musicName = "";
    this.musicUri = "";

    this.add = function() {
      this.currentMusic = {name: this.musicName, uri: this.musicUri};
      this.queue.push(this.currentMusic);
    };

    this.remove = function(item) {
      var index;
      var numToRemove = 1;
      index = this.queue.indexOf(item);
      this.queue.splice(index, numToRemove);
    };

    //not yet implemented
    this.play = function() {
      console.log("Play " + " " + this.currentMusic.uri);
    };
    this.pause = function() {};
    this.stop = function() {};

  }])
  .controller('loginController', ['$routeParams', function($routeParams) {
    // not yet implemented.
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
