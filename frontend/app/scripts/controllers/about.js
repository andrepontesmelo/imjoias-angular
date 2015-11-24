'use strict';

/**
 * @ngdoc function
 * @name angularComSassApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularComSassApp
 */
angular.module('angularComSassApp')
  .controller('AboutCtrl', ['$scope', 'myFactory', function ($scope, myFactory) {

    myFactory.get({}, function (myFactory) {
      $scope.pessoas = myFactory.pessoas;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
