'use strict';

angular.module('angularComSassApp')
  .controller('HeaderCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.url();
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
