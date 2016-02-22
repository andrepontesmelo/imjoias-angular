'use strict';

angular.module('angularComSassApp')
  .controller('MercadoriasCtrl', ['$scope', 'mercadoriasFactory', function ($scope, mercadoriasFactory) {

    mercadoriasFactory.get({}, function (mercadoriasFactory) {
      $scope.mercadorias = mercadoriasFactory.mercadorias;
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    return [];

  }]);
