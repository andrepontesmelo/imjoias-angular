'use strict';

angular.module('app')
  .controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.url();
    };
  }]);
