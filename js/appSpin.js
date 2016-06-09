'use strict';
angular.module('appSpin', ['ngRoute'])
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
  }])
  .controller('playerController', ['$scope','$routeParams', function($routeParams, $scope) {
    // not yet implemented.
    this.queue = [{name: "first", uri: "first.html"}, {name: "second", uri: "second.html"}];

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
