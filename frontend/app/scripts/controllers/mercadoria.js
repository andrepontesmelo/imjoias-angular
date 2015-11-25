'use strict';

angular.module('angularComSassApp')
  .controller('MercadoriaCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.referenciaMercadoria = $routeParams.referenciaMercadoria;

    $scope.delete = function () {
      console.log("Delete()");
    };
  }]);
