'use strict';

angular.module('angularComSassApp')
  .controller('MercadoriasCtrl', ['$scope', 'mercadoriaFactory', function ($scope, mercadoriaFactory) {

    mercadoriaFactory.get({}, function (mercadoriaFactory) {
      $scope.mercadorias = mercadoriaFactory.mercadorias;
    });

    $scope.searchText = 201;



    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    return [];

  }]);
