appSpin.controller('appSpinController', ['$scope', '$http', '$route', '$routeParams', '$location',
  function($scope, $http, $route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    $scope.appName = "Spin";
    $scope.spinFooter = "Made by gangoffork.";
    $scope.menu = [{name: "Spin", uri: "#home"},{name: "Player", uri: "#player"}, {name: "Local", uri: "#localPlayer"}];
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
  };

  this.add = function() {
    this.currentMusic = {name: this.musicName, uri: this.musicUri};
    this.queue.push(this.currentMusic);
    $scope.currentVideo = verifyYoutubeUrl(this.currentMusic.uri);
  };

  this.remove = function(item) {
    var numToRemove = 1;
    this.queue.splice(this.queue.indexOf(item), numToRemove);
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
.controller('localPlayerController', ['$scope', '$routeParams', function($scope, $routeParams, $ngSrc){
  this.fileName = "";
  $scope.filePath = "#";
  $scope.fileNameChanged = function(elem) {
    for (var i = 0; elem.files.length > i; i++) {
      this.fileName = elem.files[i].name;
      $scope.filePath = elem.files[i].path;
    }
  };
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
