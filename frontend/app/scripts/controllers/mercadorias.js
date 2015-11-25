'use strict';

angular.module('angularComSassApp')
  .controller('MercadoriasCtrl', ['$scope', 'mercadoriaFactory', function ($scope, mercadoriaFactory) {

    mercadoriaFactory.get({}, function (mercadoriaFactory) {
      $scope.mercadorias = mercadoriaFactory.mercadorias;
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
