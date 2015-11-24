'use strict';

/**
 * @ngdoc function
 * @name angularComSassApp.controller:MercadoriaCtrl
 * @description
 * # MercadoriaCtrl
 * Controller of the angularComSassApp
 */
angular.module('angularComSassApp')
  .controller('MercadoriaCtrl', ['$scope', 'mercadoriaFactory', function ($scope, mercadoriaFactory) {

    mercadoriaFactory.get({}, function (mercadoriaFactory) {
      $scope.mercadorias = mercadoriaFactory.mercadorias;
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
