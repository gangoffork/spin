'use strict';
angular.module('appSpin', [])
  .controller('appSpinController', ['$scope', '$http', function($scope, $http) {
    $scope.appName = "Spin";
    $scope.spinFooter = "Made by gangoffork.";

  }])
  .directive('spinFooter', function() {
    return {
      templateUrl: 'template/spin-footer.html'
    };
  });
