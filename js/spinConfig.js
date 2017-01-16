appSpin.config(['$routeProvider', '$locationProvider',
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
      .when('/localPlayer', {
        templateUrl: 'pages/localPlayer.html',
        controller: 'localPlayerController',
        controllerAs: 'localPlayer'
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
});
